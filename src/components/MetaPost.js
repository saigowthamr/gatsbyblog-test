import React from 'react';
import Helmet from 'react-helmet';

const MetaPost = (props) => (

        <Helmet
            title={props.title}
            meta={[
                { name: 'title', content: props.title },

                { name: 'description', content: props.description },
                ,
                {
                    property: 'og:title',
                    content: props.title,
                },
                {
                    property: 'og:url',
                    content: props.url+props.pathname,
                },

                {
                    property: 'og:image',
                    content:
                        props.thumbnail && props.url + props.thumbnail,
                },
                {
                    property: 'og:description',
                    content: props.description,
                },
                {
                    name: 'twitter:description',
                    content: props.description,
                },
                {
                    name: 'twitter:image:src',
                    content:
                        props.thumbnail &&
                        props.url +props.thumbnail,
                },

                {
                    rel: 'author',
                    href: 'https://twitter/saigowthamr',
                },
                { property: 'author', content: 'Sai gowtham' },
                { property: 'og:type', content: 'article' },
                { name: 'twitter:card', content: 'summary_large_image' },
                {
                    property: 'article:publisher',
                    content: 'https://www.twitter.com/@saigowthamr',
                },
                { property: 'article:author', content: 'Sai gowtham' },
                { name: 'robots', content: 'index, follow' },
                {
                    property: 'article:published_time',
                    content: props.date,
                },
                { name: 'twitter:creator', content: '@saigowthamr' },
                { property: 'og:site_name', content: 'saigowtham' },
            ]}
        />

)


export default MetaPost;