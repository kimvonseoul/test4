import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import DB from "./DB";

const Posts = () => {
    const id = useParams();
    var td = new Date();
    var month = '0' + (td.getMonth()+1).toString()
    td = month+td.getDate().toString();
    console.log(td);
    return(
        <div>
            <div>{id.name}</div>
            <DB id={id.name}/>
            <Link to='/page'>홈으로</Link>
        </div>
    );
}

export default Posts;