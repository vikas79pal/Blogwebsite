import { createContext, useState } from "react";
import { baseUrl } from "../baseurl";

export const AppContext=createContext()

export const AppContextProvider=({children})=>{
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalPage,setTotalPage]=useState(0)
    const [posts,setPosts]=useState(null)

    const fetchBlogPost=async (page=1)=>{
        setLoading(true)
        const url=`${baseUrl}?page=${page}`
        try{

            const res=await fetch(url)
            const data=await res.json()
            console.log(data,"sjdb")
            setPosts(data.posts)
            setPage(data.page)
            setTotalPage(data.totalPages)
            console.log(posts,"sjsbd")


        }
        catch(err){
            console.log(err)
            setPosts(null)
            setPage(0)
            setTotalPage(0)


        }
        setLoading(false)
        
    }

    function handlePageChange (page){
        
        setPage(page)
        fetchBlogPost(page)
    }
    const value={
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        loading,
        setLoading,
        fetchBlogPost,
        handlePageChange
    }

    return(
<AppContext.Provider value={value}>
{children}
</AppContext.Provider>
    )
}