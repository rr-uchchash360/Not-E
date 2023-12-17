// Homepage
exports.homepage = async (req, res) => {
    const locals = {
      title: "Not-E",
      description: "An online note taking app.",
    }
    res.render('index', {
      locals,
      layout: '../views/layouts/front-page'
    });
}

// About
exports.about = async (req, res) => {
  const locals = {
    title: "About Not-E",
    description: "About : An online note taking app.",
  }
  res.render('about', locals);
}
  