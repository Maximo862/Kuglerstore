import {Link} from 'react-router-dom'

export function Relatedproducts({products,product}) {
  
    
  const relatedproducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  
    return (
        <>
     <h3 className="Text_relatedproducts">Related products: </h3> 
     <div className='boxes'>  
        {relatedproducts.length > 0 ? (
          relatedproducts.map((p) => {
            return (
              <>
                <div className="box" key={p.id}>
                  <img src={p.thumbnail} alt={p.title} />
                  <h5>{p.title}</h5>
                  <p>{p.category}</p>
                  <p>{p.price}$</p>
                  <div className='product-butons'>
                    <Link to={`/Productdetails/${p.id}`}>
                      <button className="buton-animation"><span>View more details</span></button>
                    </Link>
                    </div>
                </div>
              </>
            );
          })
        ) : (
          <p className='my-5 d-flex justify-content-center'>No related products found...</p>
        )}
           </div>
    </>
  )
}

