import React, { useState, useEffect, useRef } from "react";
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button, Slide } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import type { TransitionProps } from '@mui/material/transitions';
import { CSSTransition } from "react-transition-group";
import "./../Component/animation/Navbar.css";

const SlideTransition = React.forwardRef(function SlideTransition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface NavbarProps {
  onSearch: (query: string) => void;
  cart: any[];
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, cart }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={visible}
      timeout={700}
      classNames="navbar"
      unmountOnExit
    >
      <nav ref={nodeRef} className="flex justify-between items-center p-4 shadow-md relative z-10 bg-amber-200 rounded-b-4xl">
        <div className="w-1/3">
          <TextField 
            id="standard-basic" 
            label="جستجو..." 
            variant="standard" 
            fullWidth 
            onChange={(e) => onSearch(e.target.value)} 
          />
        </div>

        <div className="text-3xl font-bold tracking-wider text-gray-800">
          SHOPY
        </div>

        <div className="w-1/3 flex justify-end">
          <div onClick={handleClickOpen} className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition relative">
            <ShoppingCartIcon fontSize="large" color="action" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        <Dialog
          open={open}
          TransitionComponent={SlideTransition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>سبد خرید ({cart.length})</DialogTitle>
          <DialogContent>
            <div className="mt-2">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-4">سبد خرید شما خالی است.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 border-b pb-2">
                      <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold line-clamp-1">{item.title}</h4>
                        <p className="text-green-600 text-sm">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>بستن</Button>
            {cart.length > 0 && <Button onClick={handleClose} variant="contained" color="primary">پرداخت</Button>}
          </DialogActions>
        </Dialog>
      </nav>
    </CSSTransition>
  );
};

export default Navbar;