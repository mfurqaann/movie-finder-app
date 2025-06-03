import React from 'react'

const Videos = ({ videos }: any) => {
    const videoDetails = videos?.results?.slice(0, 3) || []

    if (videoDetails.length === 0) {
        return <p className='mt-5 text-xl font-bold'>No videos available</p>;
    }
    return (
        <div>
            <div>
                <p className='mt-5 text-xl font-bold'>Videos</p>
            </div>
            <div className='flex gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide mt-5'>
                {videoDetails.map((videoDetail: any) => (
                    <div key={videoDetail.id}>
                        <iframe
                            src={`https://www.youtube.com/embed/${videoDetail.key}`}
                            title={videoDetail.name}
                            allow='encrypted-media;'
                            allowFullScreen
                            className='lg:w-[500px] md:w-[450px] w-[360px] lg:h-[300px] md:h-[250px] h-[200px] rounded-lg'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Videos