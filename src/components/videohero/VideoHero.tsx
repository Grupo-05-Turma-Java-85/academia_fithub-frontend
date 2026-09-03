function VideoHero() {
    return (
        <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
        >
            <source
                src="/videos/fds4.mp4"
                type="video/mp4"
            />
        </video>
    );
}

export default VideoHero;