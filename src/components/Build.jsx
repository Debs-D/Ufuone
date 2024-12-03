import ModalExample from "./ModalExample";

const Build = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-400 via-blue-300 to-orange-500 p-8 flex flex-col justify-start items-center">
      <div className="flex items-center gap-16">
        <img
          src="https://s3-alpha-sig.figma.com/img/1dab/4b11/c1ed7785121b6aa885d763c0940f7bbf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDoqHKib8RSY8BToKEJLMWDYz4d9oYNszUnFWAAUosiDbu09ACV24Yos6lVJnKalYa1Z7VagXqJLzZWuKm-roMP2BN4Ac1yDTcEiPhyJPP6vVZCyJysz6RvveUMnPi-u~hSH7QApFkxLyipe~TtyjeN7sjWvxHJzU8aXFIHd6MeNGkQQjn4oNgR7GEwF44ECoTyim1zmjtt-hUJBuWJDhcx1LFiQePrlVdtZZmflTPn6yUKxuFWOwpG7iDjzOd4JLolpVakLdLSOXlBL0-fEL4t9yvdbqC6oLA5dWOk5VjW2DSnvrj3jOmE4n5YCaWhyaFp7HJKFi08GljYdeCGTxQ__"
          alt="image"
          className="w-60 h-"
        />

        <div className="flex gap-6">
          <button className="w-40 py-4 bg-orange-600 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-orange-500 hover:scale-105 transition-transform duration-300">
            Low Level Project
          </button>
          <button className="w-40 py-4 bg-orange-600 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-orange-500 hover:scale-105 transition-transform duration-300">
            High Level Project
          </button>
        </div>
      </div>
      <ModalExample />
    </div>
  );
};

export default Build;
