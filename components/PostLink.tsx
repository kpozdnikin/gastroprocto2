import React from 'react';
import Link from 'next/link';

const PostLink = (props: any) => (
    <Link href="/articles/article" as={`/blog/:${props.id}`}>
        <a>читать далее</a>
    </Link>
);

export default PostLink;