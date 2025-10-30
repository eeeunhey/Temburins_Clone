// Navbar.jsx
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, LogIn, LogOut, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

const MENU = ["SUNSHINE", "PERFUME", "HAND&LIP", "BODY", "HOME FRAGRANCE"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();

  const handleLoginToggle = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      navigate("/login");
      setIsLoggedIn(true);
    }
  };

  const search = (e) => {
    if (e.key === "Enter") {
      console.log("뭐가 눌렸나", e.key);
      let keyword = e.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="grid grid-cols-3 items-center px-6 py-3 border-b md:flex md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-neutral-100"
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon className="w-5 h-5 " />
        </button>

        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-neutral-100"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="w-5 h-5 text-neutral-900" />
          </button>

          <button
            aria-label="로그인/로그아웃"
            onClick={handleLoginToggle}
            className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-neutral-100"
          >
            {isLoggedIn ? (
              <LogOut className="w-5 h-5 text-neutral-900" />
            ) : (
              <User className="w-5 h-5 text-neutral-900" />
            )}
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {MENU.map((menu) => (
          <Link
            key={menu}
            to="/products"
            className="!text-neutral-800 hover:text-neutral-600 no-underline uppercase tracking-wide"
          >
            {menu}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="찾으시는 상품을 입력하세요"
            className="w-full bg-neutral-50 border border-transparent rounded-xl pl-9 pr-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm  outline-none"
            onKeyDown={search}
          />
        </div>

        <button
          onClick={handleLoginToggle}
          className="flex items-center gap-1 text-gray-700 hover:text-black transition"
        >
          <User className="w-5 h-5" />
          {isLoggedIn ? (
            <>
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Logout</span>
            </>
          ) : (
            <>
              <LogIn className="w-5 h-5" />
              <span className="text-sm font-medium">Login</span>
            </>
          )}
        </button>
      </div>

      {isSearchOpen && (
        <div className="col-span-3 md:hidden px-6 mt-3">
          <input
            type="text"
            placeholder="찾으시는 상품을 입력하세요"
            className="w-full bg-neutral-50 border border-gray-300 rounded-xl px-4 py-2 text-sm shadow-sm outline-none"
            onKeyDown={search}
            autoFocus
          />
        </div>
      )}

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded hover:bg-neutral-100"
          >
            <X className="w-5 h-5 text-black" />
          </button>

          <nav className="pt-14">
            <ul className="divide-y divide-neutral-200">
              {MENU.map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-4 text-[14px] font-medium tracking-wide text-black"
                  >
                    <span className="uppercase">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute bottom-8 left-4 text-sm text-neutral-700">
            <button onClick={handleLoginToggle}>
              {isLoggedIn ? "로그아웃" : "로그인"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
