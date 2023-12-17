// Dashboard
exports.dashboard = async (req, res) => {
    const locals = {
      title: "Dashboard",
      description: "An online note taking app.",
    }
    res.render('dashboard/index', {
      locals,
      layout: '../views/layouts/dashboard'
    });
}