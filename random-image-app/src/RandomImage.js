import React, { useEffect, useState } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import axios from 'axios';
 import { FaTwitter } from 'react-icons/fa';
 import { FaFacebook } from 'react-icons/fa';
 import { FaWhatsapp} from 'react-icons/fa';
const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get('https://picsum.photos/800/600'); // Use picsum.photos API to get a random image
      setImageUrl(response.request.responseURL);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    const shareText = 'Check out this random image!';

    // Share URL on Facebook
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');

    // Share URL on Twitter
    window.open(`https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`, '_blank');

    // Share URL on WhatsApp
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}%20${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div>
      <img src={imageUrl} className="center" alt="Random" style={{ width: '40%', height: 'auto' }} />
      <div>
        <button onClick={fetchRandomImage}>Refresh</button>
        <button onClick={handleShare}>Share</button>
      </div>
      <div>
        <FacebookShareButton url={window.location.href}>
        <FaFacebook/>
        </FacebookShareButton>
        <TwitterShareButton url={window.location.href}>
        <FaTwitter />
        </TwitterShareButton>
        <WhatsappShareButton url={window.location.href}>
        < FaWhatsapp/>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default RandomImage;
