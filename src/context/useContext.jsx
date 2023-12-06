/* eslint-disable no-unused-vars */
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

// eslint-disable-next-line react/prop-types
const CostumeItemContext = ({ children }) => {
  const [newsApi, setNewsApi] = useState([]);
  const [favs, setFavs] = useState([]);
  const [user, setUser] = useState();
  //   console.log(favs);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=3a7838dde2f640f088f9eb9ab23b375f"
        );

        if (response.ok) {
          const data = await response.json();
          const idnews = data.articles.map((newss, index) => {
            return { ...newss, id: index };
          });
          setNewsApi(idnews);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //   const addFav = (news) => {
  //     setFavs(news);
  //   };

  const addFav = async (news) => {
    const customId = (Number.MAX_SAFE_INTEGER - Date.now()).toString();
    try {
      const fav = favs.some((fab) => fab.title === news.title);
      const favRef = doc(db, "users", user.uid, "favs", customId);
      if (!fav) {
        await setDoc(favRef, {
          title: news.title,
          description: news.description,
          urlToImage: news.urlToImage,
          id: news.id,
          url: news.url,
        });
      }
    } catch (error) {
      console.error("Error adding cart item:", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscribe = onSnapshot(
          query(collection(db, "users", user.uid, "favs")),
          (snapshot) => {
            const fab = snapshot.docs.map((f) => {
              return f.data();
            });
            setFavs(fab);
          }
        );
        return () => {
          unsubscribe();
        };
      }
    });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          const uid = user.uid;
          setUser(user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log("err", err);
      }
    });
  }, []);

//   const removeFav = async (id) => {
//     console.log(id)
//     onAuthStateChanged(auth, async (user) => {
//       if (user) {
//           console.log("user")
//         await deleteDoc(doc(db, "users", user.uid, "favs", id));
//       }
//     });
//   };

  return (
    <itemContext.Provider value={{ newsApi, addFav, favs,  }}>
      {children}
    </itemContext.Provider>
  );
};

export { CostumeItemContext, itemContext, useValue };
