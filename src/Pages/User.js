import { Grid } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../components/Header';
import Posts from '../components/Posts';

function User() {
    
    var id = useParams().id;
    
    const [user, setUser] = useState({
        data: null,
        loading: true,
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id).then((response) => {
            setUser({ data: response.data, loading: false });
        }).catch((error) => {
            console.log(error);
            setError(true);
        })
    }, [setUser, id]);

    return (
        <>
            {!error ? (
                !user.loading ? (
                    <>
                        <Header user={user.data} />
                        <Posts user={user.data} />
                    </>
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

export default User;
