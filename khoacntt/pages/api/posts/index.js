import { posts } from "../../../db";

export default function handler(req, res) {
    posts.sort((a, b) => {return new Date(b.date) - new Date(a.date)});
    
    res.status(200).json(posts);
}