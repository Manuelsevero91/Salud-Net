import NotFoundImage from '../assets/not-found.jpg';

const NotFound = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
      <img
        src={NotFoundImage} alt="Not Found" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default NotFound;
 