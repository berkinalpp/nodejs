

export const getIndexPage = (req,res) => {
    res.status('200').render('index', {
        currentPage: 'index'
    })
}

export const getAboutPage = (req,res) => {
    res.status('200').render('about', {
        currentPage: 'about'
    })
}
export const getContactPage = (req,res) => {
    res.status('200').render('contact', {
        currentPage: 'contact'
    })
}

export const getCoursesPage = (req,res) => {
    res.status('200').render('courses', {
        currentPage: 'courses'
    })
}

export const getDashboardPage = (req,res) => {
    res.status('200').render('dashboard', {
        currentPage: 'dashboard'
    })
}

export const getLoginPage = (req,res) => {
    res.status('200').render('login', {
        currentPage: 'login'
    })
}

export const getRegisterPage = (req,res) => {
    res.status('200').render('register', {
        currentPage: 'register'
    })
}








