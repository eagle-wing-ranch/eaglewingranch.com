import React, { useEffect, useState } from 'react'
import Container from 'components/Container'
import Grid from 'components/Grid'

const THUMBNAIL_WIDTH = 320
const LIMIT = 12

export default function InstagramFeed({ instagramId, children }) {

    const [ loading, setLoading ] = useState(true)
    const [ photos, setPhotos ] = useState()
    const [ error, setError ] = useState()

    useEffect(() => {
        fetchInstagramPosts(instagramId)
    }, [instagramId])

    async function fetchInstagramPosts(instagramId) {
        try {
            const response = await fetch(`https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${instagramId}","first":${LIMIT},"after":null}`)
            const res = await response.json()
            console.log(res)
            const { data } = res
            const photos = []
            data.user.edge_owner_to_timeline_media.edges.map(
                ({ node }) => {
                  const { id } = node
                  const comments = node.edge_media_to_comment.count
                  const likes = node.edge_media_preview_like.count
                  const caption = node.edge_media_to_caption.edges[0].node.text
                  const thumbnail = node.thumbnail_resources.find(
                    thumbnail => thumbnail.config_width === THUMBNAIL_WIDTH
                  )
                  const { src, config_width: width, config_height: height } = thumbnail
                  const url = `https://www.instagram.com/p/${node.shortcode}`
                  return photos.push({
                    id,
                    caption,
                    src,
                    width,
                    height,
                    url,
                    comments,
                    likes,
                  })
                }
              )
              setPhotos(photos)
              setLoading(false)
        }
        catch(err) {
            setError(true)
            setLoading(false)
        }
    }

    if (loading) return 'Loading instagram posts...'

    return (
        <Container type='instagram' constrain={ false }>
				<div style={{ textAlign: 'center' }}>
					<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1"  width="48" height="48" viewBox="0 0 24 24">
						<path fill="#999" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
					</svg>
				</div>
				<h3 style={{ textAlign: 'center' }}>{ error ? 'Unable to load posts from instagram' : 'Latest Instagram Posts' }</h3>
				<Grid sm={2} md={4} lg={4} xl={6} gap={false}>

					{
						photos && photos.map(({ src, url, id, likes, comments, caption }) => {
							return (
								<div key={id}
									className='instagramPostContainer'
								>
                                    <img
                                    src={src}
                                    className="post-image"
                                    alt={caption.substring(0, 40)}
                                    />
                                    <div className='instagramPostCaption'>{ caption }</div>
                                </div>
							)
						})
					}

				</Grid>
				  {
              children
          }
			</Container>
    )

}