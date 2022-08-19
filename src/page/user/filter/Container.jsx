import  React, { useState,useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Modall from './Modall';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination as Pagination2 , Navigation } from "swiper";
import { Rate } from 'antd';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import 'antd/dist/antd.css';
import  style from './container.module.css'
import "./styles.css";
import { VapeFreeOutlined } from '@mui/icons-material';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';


const Container = ({data1, inp,price1, price750, listProducts ,setId}) => {
  const [listProductss, setListProductss] = useState(listProducts)
  const [listData1, setListData1] = useState([])
  const [byprice, setByprice] = useState(0)
  const [dem, setDem] = useState(0)
  const [count, setCount] = useState(16)
  const [list, setList] = useState([])
  const [current, setCurrent] = useState(3);
  const [checked, setChecked] = useState(true)
  const [listnew, setListnew] = useState([])
  const [dataa, setDataa] = useState([])
  const [dem1, setDem1] = useState(0)
  const [dem3, setDem3] = useState(0)
  const [query] = useSearchParams()
  const search = query.get('seaarch')

  const onChange = (page) => {
    setCurrent(page);
  };
  
  
      const pricelow = () => {
        if(dem === 0) {
          setListnew(() =>  {
              const newDatalow = [...dataa]
                newDatalow.sort((a, b) => {
                 return a.price - b.price;
                })
                return newDatalow
              })
            }else {
              setListnew(() =>  {
                const newDatalow = [...listProductss]
                  newDatalow.sort((a, b) => {
                    return a.price - b.price;
                  })
                  return newDatalow
                })
            }
          setChecked(checked => !checked)
        }
    

        useEffect(() => {
          if(typeof price1 === 'number') {
              if(dem === 0) {    
                setByprice(() => {
                  let newData5 = [...dataa]
                  const newData3 = newData5.filter(data => data.price < price1)
                  return newData3 
                })
             
              }
              else {
                setByprice(() => {
                  const newData = [...listProductss]
                  const newData3 = newData.filter(data => data.price < price1)
                  return newData3
                })
              }      
              setDem1(dem1 => ++dem1)
              }else {
                setDem1(0)
            setByprice(0)
          }
          },[price1])
          

        useEffect(() => {
          if(inp.min !== undefined) {
              if(dem === 0) {    
                setByprice(() => {
                 let newData5 = [...dataa]
                  const newData3 = newData5.filter(data => {
                    if(data.price >= inp.min && data.price <= inp.max) {
                      return true
                    }
                  })
                  return newData3 
                })
              }
              else {
                setDem1(dem1 => ++dem1)
                setByprice(() => {
                  const newData = [...listProductss]
                  const newData3 = newData.filter(data => {
                    if(data.price >= inp.min && data.price <= inp.max) {
                      return true
                    }
                  })
                  return newData3
                })
              }      
          }else {
            setDem1(0)
            setByprice(0)
          }
          },[inp])  


        useEffect(() => {
          if(typeof price750 === 'number') {
              if(dem === 0) {    
                setByprice(() => {
                  let newData5 = [...dataa]
                  const newData3 = newData5.filter(data => data.price > price750)
                  return newData3 
                })
             
              }
              else {
                setByprice(() => {
                  const newData = [...listProductss]
                  const newData3 = newData.filter(data => data.price > price750)
                  return newData3
                })
                setDem1(dem1 => ++dem1)
              }      
              }else {
                setDem1(0)
            setByprice(0)
          }
         
          },[price750])


      const pricehigh = () => {
        if(dem === 0) {
          setListnew(() =>  {
              const newDatalow = [...dataa]
                newDatalow.sort((a, b) => {
                  return b.price - a.price;
                })
                return newDatalow
              })
              
            }else {
              setListnew(() =>  {
                const newDatalow = [...listProductss]
                newDatalow.sort((a, b) => {
                  return b.price - a.price;
                })
                return newDatalow
              })
            }
            setChecked(checked => !checked)     
      }
   
      const selling = () => {
        if(dem === 0) {
          setListnew(() =>  {
              const newDatalow = [...dataa]
                newDatalow.sort((a, b) => {
                  return b.sold - a.sold;
                })
                return newDatalow
              })
              
            }else {
              setListnew(() =>  {
                const newDatalow = [...listProductss]
                newDatalow.sort((a, b) => {
                  return b.sold - a.sold;
                })
                return newDatalow
              })
            }
            setChecked(checked => !checked)     
      }
   

      const newproducts = () => {
        if(dem === 0) {
          setListnew(() =>  {
              const newDatalow = [...dataa]
                newDatalow.sort((a, b) => {
                  const a1 = new Date(a.updatedAt)
                  const b1 = new Date(b.updatedAt)
                  return a1 - b1
                })
                return newDatalow
              })
              
            }else {
              setListnew(() =>  {
                const newDatalow = [...listProductss]
                newDatalow.sort((a, b) => {
                  const a1 = new Date(a.updatedAt)
                  const b1 = new Date(b.updatedAt)
                  return a1 - b1
                })
                return newDatalow
              })
            }
            setChecked(checked => !checked)   
      }


      useEffect(() => {
        setDataa(listProducts)
      },[listProducts])
    

      useEffect(() => {
        let Data = byprice.length > 0 ? [...byprice] : []
        for (let key in data1) {
          let index = 0
          for (let key in data1) {
            if (data1[key].length === 0) {
              index++
            }
          }   
          if (index === Object.keys(data1).length) { 
            setDem(0)
              setListnew([])
              setListProductss(dataa)
              setListData1(() => {
                const list = [...dataa].slice(0, 16)
                return list
              })
            
            } else {
            if (data1[key].length === 0) {
              continue
            } else {
              if (Data.length === 0) {
                let NewData = []          
                if(byprice === 0){
                  NewData = dem1 === 0 ? [...dataa] : [...byprice]
                }
                else {
                  NewData = [...byprice]
                }
                setDem(dem => ++dem)
                if(key === 'brandName'){
                  data1[key].map(title => {
                    Data = [...Data, ...NewData.filter(filter => filter.brandId[key] === title)]
                  })
                }
                  else {
                    data1[key].map(title => {
                      Data = [...Data, ...NewData.filter(filter => filter.shopId[key] === title)]
                    })
                  }

              } else {
                setDem(dem => ++dem)
                let NewData = []
                if(byprice === 0 ){
                  NewData = dem1 === 0 ? [...Data] : [...byprice]
                }
                else {
                  NewData = [...byprice]
                }
                  let newData2 = []
                  console.log(274, NewData)
                  if(key === 'brandName'){
                    data1[key].map(title => {
                      newData2 = [...newData2, ...NewData.filter(filter => filter.brandId[key] === title)]
                      Data = [...newData2]
                    })
                  }
                    else {
                      data1[key].map(title => {
                        newData2 = [...newData2,...NewData.filter(filter => filter.shopId[key] === title)]
                        Data = [...newData2]
                      })     
                    }  
                }
                
              }
              if(Data.length === 0) {
                setDem(dem => ++dem)
                setListnew([])
                setListData1(Data)
                setListProductss(Data)
                setChecked(checked => !checked) 
            }
          }
        }

        if(Data.length > 0 || byprice.length === 0) {
          setDem(dem => ++dem)
          setListnew([])
          setListData1(Data)
          setListProductss(Data)
          setChecked(checked => !checked)   
        }
    
      }, [data1, byprice, dataa])


      useEffect(() => {
        if(dem1 === 1 && data1.address.length === 0 && data1.trademark.length === 0 && data1.shopName.length === 0) {
          if(inp.min !== undefined) {
            setByprice(() => {
              let newData5 = [...dataa]
               const newData3 = newData5.filter(data => {
                 if(data.productDetailId[0].price >= inp.min && data.price <= inp.max) {
                   return true
                 }
               })
               return newData3 
             }) 
          }else if(price1 === 200000){
            setByprice(() => {
              let newData5 = [...dataa]
              const newData3 = newData5.filter(data => data.price < price1)
              return newData3 
            })
          }else {
            setByprice(() => {
              let newData5 = [...dataa]
              const newData3 = newData5.filter(data => data.price > price750)
              return newData3 
            })
          }
          setChecked(checked => !checked)  
        }
      },[data1])

   
      function popular() {
        setListnew([])
        setListProductss(dataa)
        setListData1(dataa)
        setChecked(checked => !checked)
      }


      useEffect(() => {
          if(listnew.length === 0) {
            setPage(1)
            setListData1(() => {
              const list = [...listData1].slice(0, 16)
              return list
            })
          }else {
            setPage(1)
            setListData1(() => {
              const list = [...listnew].slice(0, 16)
              return list
            })
          } 
      },[checked])



      const [page, setPage] = React.useState(1);
      const handleChange = (page, pageSize) => {
        setPage(pageSize);
        const start = (pageSize - 1) * count;
        const end = pageSize * count;
          if(listnew.length === 0) {
            setListData1(listProductss.slice(start, end));
          }
          else {
            setListData1(listnew.slice(start, end));
          }
      };
      const nav = useNavigate()


      const handleID = (id) => {
        nav(`/detail?id=${id}`)
        setId(id)
      }

      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },[page])
  

  return (
    <div className={style.container}>
        <h2 className={style.title}>{search}</h2>
    <div className={style.slider}>
  <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1.4}
        allowSlideNext={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination2, Navigation]}
        loop={true}
        loopPreventsSlide={true}
        className="mySwiper"
       
      >
        <SwiperSlide>
          <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/70/86/fb/b1b62d6f222959307972189d6c7c946e.jpg.webp' alt='' className={style.img}/>
        </SwiperSlide>
        <SwiperSlide><img src='https://salt.tikicdn.com/cache/w1080/ts/banner/29/be/8a/ac09f1dde1dd08f914a50510c396ed04.jpg.webp' alt='' className={style.img}/></SwiperSlide>
        <SwiperSlide>
        <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/29/be/8a/ac09f1dde1dd08f914a50510c396ed04.jpg.webp' alt='' className={style.img}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/a4/02/80/486cc9da76ecaf6e78d0089eaacc28c2.png.webp' alt='' className={style.img}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/0c/2b/ca/43d933bc0a53a15f58a66cb836a64bec.png.webp' alt='' className={style.img}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/33/c2/73/95e85a9098f07a25569e98c0f1a4f757.png.webp' alt='' className={style.img}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/06/37/79/6e63d637ff9346f787cc4fa891b77f1b.png.webp' alt='' className={style.img}/>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
    <div className={style.select}>
        <span className={[style.select_name, style.select_active].join(' ')} onClick={popular}>Phổ Biến</span>
        <span className={style.select_name} onClick = {selling}>Bán Chạy</span>
        <span className={style.select_name} onClick={newproducts}>Hàng Mới</span>
        <span className={style.select_name} onClick= {pricelow}>Giá Thấp</span>
        <span className={style.select_name} onClick= {pricehigh}>Giá Cao</span>
    </div>
    <Modall className = 'filter_modal'/>
    <div className={style.products}>
        {listData1.map(val => {
      
            return  (
                <div className={style.products_item} key={val._id} onClick = {() => handleID(val._id)}>
                <div className={style.products_thumbnail}>
                    <img src={val.thump[0]} alt='' className={style.image_img} />
                    {/* <img src={val.categoryId.thumbnail} alt='' className={style.thumbnail_img} />  */}
                </div>
                <div className={style.products_info}>
                    <span className={style.ad}>Ad</span>
                    <h4 className={style.products_title}>{val.productName}</h4>
                    <div className={style.products_rating}>
                    <Rate allowHalf defaultValue={3} style = {{fontSize:'0.7rem'}}/>
                    <span className={style.products_sold}>đã bán {val.sold}</span>
                    </div>
                    <div className={style.products_price_box}>
                    <span  className={style.products_price}>{val.price.toLocaleString().split(',').join('.')} đ</span>
                    <span className={style.products_discount}>-14%</span>
                    </div>
                    <div>
                    {
                      
                    }
                    {/* <img src={val.categoryId.item} alt='' className={style.badge_under} /> */}
                    </div>
                </div>
                </div>
            )
            
        
        })}
    </div>
   <div style={{float: 'right', margin:'20px 0'}} className={style.Pagination}>
   <Stack spacing={2}>
      <Pagination count={Math.ceil(listProductss.length / 16)} page={page} onChange={handleChange}/>
    </Stack>
   </div>
    </div>
  )
}

export default Container