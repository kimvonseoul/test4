import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Page = () => {
    //const [posts, setPosts] = useState([]);
    const posts = [];
    var tdPost = [];
    const firstPost = new Date('2024-06-25');
    const week1end = new Date('2024-06-28');
    const week2start = new Date('2024-07-01');
    const week2end = new Date('2024-07-05');
    const week3start = new Date('2024-07-08');
    //const td = new Date(); //실전용
    const td = new Date('2024-06-28')//연습용
    console.log(firstPost.getDate() - td.getDate());
    if(td == firstPost){
        tdPost = {url:'0625', date:'6월 25일'};
    } else if(td >firstPost){
        if(td < week1end){
            var d = td.getDate() - firstPost.getDate(); 
            tdPost = {url:`06${td.getDate()}`,date:`6월 ${td.getDate()}일`}
        } else {
            var d = week1end.getDate() - firstPost.getDate();
            //console.log(typeof week1end.getDate());
            tdPost = {url:`06${week1end.getDate() -1}`, date:`6월 ${week1end.getDate() -1}일`};
        }
        var d1 = firstPost.getDate();
        console.log(d);
        while(d>0){
            posts.push({date:`6월 ${d1}일`, url:`06${d1}`});
            console.log(posts);
            d1++;
            d--;
        }
    } 
    if (td >= week2start && td <= week3start) {
        if(td < week2end){
            var d = td.getDate() - week2start.getDate(); 
        } else {
            var d = week2end.getDate() - week2start.getDate();
        }
        var d1 = 1;
            console.log(d);
            while(d>=0){
                posts.push(`7월 ${d1}일`);
                console.log(posts);
                d1++;
                d--;
            }
    }
    const datesMap = posts.map((e) =>(
        <Link to={`/posts/${e.url}`}>{e.date}</Link>
    ))
    
    return(
        <div>
            <h1>새 게시글</h1>
            <Link to={`/posts/${tdPost.url}`}>{tdPost.date}</Link>
            <h1>이전 게시글</h1>
            {datesMap}
            <p>*게시글은 평일에만 업로드 됩니다.</p>
            <Link to='/posts/id'>link</Link>
        </div>
        
    );
}

export default Page;