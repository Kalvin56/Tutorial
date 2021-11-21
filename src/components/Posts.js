import { CircularProgress, Grid, List } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { isEmpty } from "../Utils";
import Post from "./Post";

function Posts({user}) {

    const [posts, setPosts] = useState({
        data: null,
        loading: true,
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/posts?user_id=' + user.id).then((response) => {
            setPosts({ data: response.data, loading: false });
        }).catch((error) => {
            console.log(error);
            setError(true);
        })
    }, [setPosts, user]);

    async function like(post){
        axios.put('http://localhost:3000/posts/' + post.id, {
            ...post,
            likes: parseInt(post.likes) + +1
        }).then((response) => {
            const postsDuplicate = [...posts.data];
            const index = postsDuplicate.findIndex(post => post.id === response.data.id);
            postsDuplicate[index] = response.data;
            setPosts({data: postsDuplicate, loading: false });
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            {!error ? (
                !posts.loading ? (
                    <List>
                        {!isEmpty(posts.data) && posts.data.map((post) => (
                            <Post post={post} like={like} key={post.id} />
                        ))}
                    </List>
                ) : 
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                    >
                    <Grid item xs={3}>
                        <CircularProgress/>
                    </Grid>   
                </Grid> 
            ) : <Redirect to='/' />}
        </>
    )
}

export default Posts
