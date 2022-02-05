export const Hero: React.FC<any> = () => {
  let videoUrl: string =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  return (
    <div>
      {/* <video className="videoPlayer" controls autoPlay>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support HTML video.
      </video> */}
    </div>
  );
};
