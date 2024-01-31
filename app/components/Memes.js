'use client';
import { useEffect, useState } from "react";
import { getMemes } from "../services/api";
import { Grid } from "@mui/material";
import MyGallery from "./MyGallery";

const Memes = () => {
    const [memes, setMemes] = useState([])
    const [after, setAfter] = useState(null); //

    useEffect(() => {
        const getData = async () => {
            let response = await getMemes();
            setMemes(response.data.children);
            setAfter(response.data.after);  //
        }
        getData();
    }, [])

    const fetchMoreMemes = async () => {    // from here
        if (!after) return; // Prevent fetching if there are no more memes to fetch

        let response = await getMemes(after); // Pass the 'after' attribute to fetch the next set of memes
        setMemes(prevMemes => [...prevMemes, ...response.data.children]);
        setAfter(response.data.after);
    };

    // Use Intersection Observer to detect when the user scrolls to the bottom of the page
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                fetchMoreMemes();
            }
        }, { threshold: 1 });
        observer.observe(document.querySelector("#observer"));

        return () => observer.disconnect(); // Cleanup
    }, [after]);                                        // to here

    // return (
    //     <Grid container margin={3}>
    //         {
    //             memes.map(meme => (
    //                 <Grid item xs={3}>
    //                     <MyGallery meme={meme} />
    //                 </Grid>
    //             ))
    //         }
    //     </Grid>
    // )
    return (
        <Grid container margin={3}>
            {
                memes.map((meme, index) => (
                    <Grid item xs={3} key={index}>
                        <MyGallery meme={meme} />
                    </Grid>
                ))
            }
            <div id="observer" style={{ height: 1 }}></div>
        </Grid>
    );
}

export default Memes;