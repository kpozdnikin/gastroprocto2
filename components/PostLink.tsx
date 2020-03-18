import React from 'react';
import Link from 'next/link';

const PostLink = (props: any) => {
    const {id, name} = props;
    return(
        <Link href="/[articleId]/[articleName]" as={`/blog/${id}/${name}`}>
            <a>читать далее</a>
        </Link>
)};
export default PostLink;


