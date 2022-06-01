
Problem:
1. I have only one HTML file in React, so I have only one route 
2. We cannt add multiple html files in ract // SPA = only one html3. 
3. React to handle URLs
    - react-router-dom

Question: How to use React-router-dom 

1. Installation: npm i react-router-dom@6
2. Wrap Our Application in BrowserRouter - index.js
    1. import { BroweserRouter } form 'react-router-dom';
    2. Wrap <App/> with <BroweserRouter> </BroweserRouter>

3. Create Routes
    /: Home
    /about : About
    /products : Products
    Q : Where to create Routes
    A : Where do you want to show information 

    1. Import {Routes, Route} from 'react-router-dom'
    2. Wrap the Routes . <Routes></Routes>
    3. <Route path="/" element={<Home/>}>
    4. <Route path="/about" element={<About/>}>
    5. <Route path="/products" element={<Products/>}>

5. Changing <a> tag with <Link> tag by importing {Link} from "react-router-dom"

make products page link 

/porducts/{name}

Flow 

1. Install
2. Wrap App in BrowserRouter
3. Create Routes and Route
4. Link and useNavigate for going to that page
5. Having Dynamica information in a route /:key and read it using useParams
6. Having Nested Routes
    <Routes>
        <Route>
        </Route>
    </Routes>
