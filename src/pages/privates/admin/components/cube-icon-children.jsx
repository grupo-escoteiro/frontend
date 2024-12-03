function IconChildren() {
  return (
    <article
      className="w-96 h-40 px-6 py-6 bg-white shadow-default cursor-pointer
                    transition duration-500 hover:brightness-95
                    dark:bg-dark-social-background dark:text-dark-social-white
                      dark:shadow-dark-social-white">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-lg font-semibold">
          Crianças cadastradas
        </h2>
        <div className="grid grid-cols-2 gap-1 w-6 h-6">
          <div className="bg-social-brand w-full h-full"></div>
          <div className="bg-social-brand w-full h-full"></div>
          <div className="bg-social-brand w-full h-full"></div>
          <div className="bg-social-brand w-full h-full"></div>
        </div>
      </div>
      <span className="text-6xl font-semibold text-social-brand">40</span>
    </article>
  );
}

export { IconChildren };