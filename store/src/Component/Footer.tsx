import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 mt-10 rounded-t-3xl shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400 tracking-wide">SHOPY</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              ما در فروشگاه شاپی متعهد هستیم که بهترین محصولات را با بالاترین کیفیت و مناسب‌ترین قیمت در اختیار شما قرار دهیم. خریدی مطمئن و آسان را تجربه کنید.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="p-2 bg-gray-800 rounded-full hover:bg-amber-500 transition-colors cursor-pointer">
                <InstagramIcon fontSize="small" />
              </div>
              <div className="p-2 bg-gray-800 rounded-full hover:bg-amber-500 transition-colors cursor-pointer">
                <TwitterIcon fontSize="small" />
              </div>
              <div className="p-2 bg-gray-800 rounded-full hover:bg-amber-500 transition-colors cursor-pointer">
                <FacebookIcon fontSize="small" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2 inline-block">دسترسی سریع</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  صفحه اصلی
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/List')} className="hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  لیست محصولات
                </button>
              </li>
              <li>
                <button onClick={() => window.scrollTo(0, 0)} className="hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  بازگشت به بالا
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2 inline-block">تماس با ما</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <PhoneIcon className="text-amber-500" />
                <span className="dir-ltr">021-12345678</span>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon className="text-amber-500" />
                <span>info@shopy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} فروشگاه SHOPY. طراحی شده با ❤️.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;