import React, { useEffect,useState } from 'react'
import 'antd/dist/antd.css';
import style from '../suggesstProduct.module.css'
import clsx from 'clsx'
import { Rate } from 'antd';
function PruductList() {
  const [data,setDatas] = useState([])
  const [pageSize,setPageSize] = useState(18)
  const datas=[
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/15/1a/01/a8081f664e69cb2f04eebbead96dd7cf.jpg.webp',
        title:'Smart Tivi QLED Samsung 4K 55 inch QA55Q60A',
        sold:200,
        star:4,
        price:20000000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/46/d4/6c/74c3659680aaab220317cac64e1eb3df.jpg.webp',
        title:'Tủ lạnh Samsung Inverter 208 lít RT19M300BGS/SV',
        sold:300,
        star:5,
        price:5150000,
        discount:19
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/bd/fc/d4/0d9018d37b8b291776ec169ab4d0bef3.jpg.webp',
        title:'Máy Giặt Samsung Inverter 9 kg WW90T634DLN',
        sold:120,
        star:5,
        price:12710000,
        discount:45
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/media/catalog/producttmp/bf/16/33/24aa58143fefa22f27449c99817bafad.jpg.webp',
        title:'Android Tivi Sony 4K 55 inch XR-55X90J',
        sold:200,
        star:4,
        price:23960000,
        discount:15
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/ff/5d/b2/b9881bd26f1dfb46df63dfcd57922baa.jpg.webp',
        title:'Android Tivi Sony 4K 65 inch XR-65X90J',
        sold:50,
        star:5,
        price:24900000,
        discount:12
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/6a/70/44/1418bc6171077b515e9f14d19d7bcd3e.jpg.webp',
        title:'Smart Tivi Coocaa Android 10 65 inch - Model 65S6G Pro Max - Hàng chính hãng',
        sold:20,
        star:5,
        price:14490000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/e5/95/13/2b36f02fd030b2115ef5be392b10a9cf.jpg.webp',
        title:'Smart Tivi QLED Samsung 4K 55 inch QA55Q60A',
        sold:200,
        star:4,
        price:20000000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/15/1a/01/a8081f664e69cb2f04eebbead96dd7cf.jpg.webp',
        title:'Combo 5 đồ bộ ba lỗ bé trai, quần áo sát nách MIMYKID in 3D',
        sold:2000,
        star:4,
        price:219000,
        discount:25
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/92/98/96/7d7ccad5d9c4ace2411b86b12e559751.jpg.webp',
        title:'Áo ba lỗ bé trai bé gái LOTUKA dễ thương, quần áo cho bé mặc nhà, Bộ quần áo trẻ em mùa hè 4-18kg',
        sold:2500,
        star:4,
        price:50000,
        discount:50
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/08/b3/eb/fe183beb8a9075721b2b011d3f52ad35.png.webp',
        title:'Tecno Pova 2 6GB l 128GB - Điện Thoại Thông Minh Chiến Game Cực Đỉnh - Hàng Chính Hãng',
        sold:890,
        star:5,
        price:3690000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/d6/a0/dc/b3b76053c68a231b097031da5a61b575.jpg.webp',
        title:'Điện Thoại Samsung Galaxy M51 (8GB/128GB) - Hàng Chính Hãng - Đã kích hoạt bảo hành điện tử',
        sold:800,
        star:5,
        price:5790000,
        discount:28
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/dd/c2/c0/f7cf2c7b41247751191bb2aecae6534e.jpg.webp',
        title:'Điện Thoại Xiaomi Redmi Note 11 4GB/128GB - Hàng Chính Hãng',
        sold:500,
        star:5,
        price:4190000,
        discount:23
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/e4/d1/c1/7d7923c3ed0f781e4eaae4972f9faf86.jpg.webp',
        title:'Điện thoại Samsung Galaxy S22 Ultra 5G (12GB/256GB) - Hàng Chính Hãng',
        sold:800,
        star:5,
        price:27990000,
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/08/b3/eb/fe183beb8a9075721b2b011d3f52ad35.png.webp',
        title:'Tecno Pova 2 6GB l 128GB - Điện Thoại Thông Minh Chiến Game Cực Đỉnh - Hàng Chính Hãng',
        sold:890,
        star:45,
        price:3690000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/fa/ec/aa/0c973b43b23266bb2ac5047caf7788f4.jpg.webp',
        title:'Tai nghe có dây dành cho iPhone Remax RM512i - Hàng chính hãng',
        sold:890,
        star:5,
        price:369000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/15/1a/01/a8081f664e69cb2f04eebbead96dd7cf.jpg.webp',
        title:'Smart Tivi QLED Samsung 4K 55 inch QA55Q60A',
        sold:200,
        star:4,
        price:20000000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/46/d4/6c/74c3659680aaab220317cac64e1eb3df.jpg.webp',
        title:'Tủ lạnh Samsung Inverter 208 lít RT19M300BGS/SV',
        sold:300,
        star:5,
        price:5150000,
        discount:19
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/bd/fc/d4/0d9018d37b8b291776ec169ab4d0bef3.jpg.webp',
        title:'Máy Giặt Samsung Inverter 9 kg WW90T634DLN',
        sold:120,
        star:5,
        price:12710000,
        discount:45
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/media/catalog/producttmp/bf/16/33/24aa58143fefa22f27449c99817bafad.jpg.webp',
        title:'Android Tivi Sony 4K 55 inch XR-55X90J',
        sold:200,
        star:4,
        price:23960000,
        discount:15
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/ff/5d/b2/b9881bd26f1dfb46df63dfcd57922baa.jpg.webp',
        title:'Android Tivi Sony 4K 65 inch XR-65X90J',
        sold:50,
        star:5,
        price:24900000,
        discount:12
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/6a/70/44/1418bc6171077b515e9f14d19d7bcd3e.jpg.webp',
        title:'Smart Tivi Coocaa Android 10 65 inch - Model 65S6G Pro Max - Hàng chính hãng',
        sold:20,
        star:5,
        price:14490000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/e5/95/13/2b36f02fd030b2115ef5be392b10a9cf.jpg.webp',
        title:'Smart Tivi QLED Samsung 4K 55 inch QA55Q60A',
        sold:200,
        star:4,
        price:20000000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/15/1a/01/a8081f664e69cb2f04eebbead96dd7cf.jpg.webp',
        title:'Combo 5 đồ bộ ba lỗ bé trai, quần áo sát nách MIMYKID in 3D',
        sold:2000,
        star:4,
        price:219000,
        discount:25
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/92/98/96/7d7ccad5d9c4ace2411b86b12e559751.jpg.webp',
        title:'Áo ba lỗ bé trai bé gái LOTUKA dễ thương, quần áo cho bé mặc nhà, Bộ quần áo trẻ em mùa hè 4-18kg',
        sold:2500,
        star:4,
        price:50000,
        discount:50
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/08/b3/eb/fe183beb8a9075721b2b011d3f52ad35.png.webp',
        title:'Tecno Pova 2 6GB l 128GB - Điện Thoại Thông Minh Chiến Game Cực Đỉnh - Hàng Chính Hãng',
        sold:890,
        star:5,
        price:3690000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/d6/a0/dc/b3b76053c68a231b097031da5a61b575.jpg.webp',
        title:'Điện Thoại Samsung Galaxy M51 (8GB/128GB) - Hàng Chính Hãng - Đã kích hoạt bảo hành điện tử',
        sold:800,
        star:5,
        price:5790000,
        discount:28
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/dd/c2/c0/f7cf2c7b41247751191bb2aecae6534e.jpg.webp',
        title:'Điện Thoại Xiaomi Redmi Note 11 4GB/128GB - Hàng Chính Hãng',
        sold:500,
        star:5,
        price:4190000,
        discount:23
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/e4/d1/c1/7d7923c3ed0f781e4eaae4972f9faf86.jpg.webp',
        title:'Điện thoại Samsung Galaxy S22 Ultra 5G (12GB/256GB) - Hàng Chính Hãng',
        sold:800,
        star:5,
        price:27990000,
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/08/b3/eb/fe183beb8a9075721b2b011d3f52ad35.png.webp',
        title:'Tecno Pova 2 6GB l 128GB - Điện Thoại Thông Minh Chiến Game Cực Đỉnh - Hàng Chính Hãng',
        sold:890,
        star:45,
        price:3690000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/fa/ec/aa/0c973b43b23266bb2ac5047caf7788f4.jpg.webp',
        title:'Tai nghe có dây dành cho iPhone Remax RM512i - Hàng chính hãng',
        sold:890,
        star:5,
        price:369000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/15/1a/01/a8081f664e69cb2f04eebbead96dd7cf.jpg.webp',
        title:'Smart Tivi QLED Samsung 4K 55 inch QA55Q60A',
        sold:200,
        star:4,
        price:20000000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/46/d4/6c/74c3659680aaab220317cac64e1eb3df.jpg.webp',
        title:'Tủ lạnh Samsung Inverter 208 lít RT19M300BGS/SV',
        sold:300,
        star:5,
        price:5150000,
        discount:19
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/bd/fc/d4/0d9018d37b8b291776ec169ab4d0bef3.jpg.webp',
        title:'Máy Giặt Samsung Inverter 9 kg WW90T634DLN',
        sold:120,
        star:5,
        price:12710000,
        discount:45
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/media/catalog/producttmp/bf/16/33/24aa58143fefa22f27449c99817bafad.jpg.webp',
        title:'Android Tivi Sony 4K 55 inch XR-55X90J',
        sold:200,
        star:4,
        price:23960000,
        discount:15
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/ff/5d/b2/b9881bd26f1dfb46df63dfcd57922baa.jpg.webp',
        title:'Android Tivi Sony 4K 65 inch XR-65X90J',
        sold:50,
        star:5,
        price:24900000,
        discount:12
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/6a/70/44/1418bc6171077b515e9f14d19d7bcd3e.jpg.webp',
        title:'Smart Tivi Coocaa Android 10 65 inch - Model 65S6G Pro Max - Hàng chính hãng',
        sold:20,
        star:5,
        price:14490000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/e5/95/13/2b36f02fd030b2115ef5be392b10a9cf.jpg.webp',
        title:'Smart Tivi QLED Samsung 4K 55 inch QA55Q60A',
        sold:200,
        star:4,
        price:20000000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/15/1a/01/a8081f664e69cb2f04eebbead96dd7cf.jpg.webp',
        title:'Combo 5 đồ bộ ba lỗ bé trai, quần áo sát nách MIMYKID in 3D',
        sold:2000,
        star:4,
        price:219000,
        discount:25
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/92/98/96/7d7ccad5d9c4ace2411b86b12e559751.jpg.webp',
        title:'Áo ba lỗ bé trai bé gái LOTUKA dễ thương, quần áo cho bé mặc nhà, Bộ quần áo trẻ em mùa hè 4-18kg',
        sold:2500,
        star:4,
        price:50000,
        discount:50
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/08/b3/eb/fe183beb8a9075721b2b011d3f52ad35.png.webp',
        title:'Tecno Pova 2 6GB l 128GB - Điện Thoại Thông Minh Chiến Game Cực Đỉnh - Hàng Chính Hãng',
        sold:890,
        star:5,
        price:3690000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/d6/a0/dc/b3b76053c68a231b097031da5a61b575.jpg.webp',
        title:'Điện Thoại Samsung Galaxy M51 (8GB/128GB) - Hàng Chính Hãng - Đã kích hoạt bảo hành điện tử',
        sold:800,
        star:5,
        price:5790000,
        discount:28
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/dd/c2/c0/f7cf2c7b41247751191bb2aecae6534e.jpg.webp',
        title:'Điện Thoại Xiaomi Redmi Note 11 4GB/128GB - Hàng Chính Hãng',
        sold:500,
        star:5,
        price:4190000,
        discount:23
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/e4/d1/c1/7d7923c3ed0f781e4eaae4972f9faf86.jpg.webp',
        title:'Điện thoại Samsung Galaxy S22 Ultra 5G (12GB/256GB) - Hàng Chính Hãng',
        sold:800,
        star:5,
        price:27990000,
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/08/b3/eb/fe183beb8a9075721b2b011d3f52ad35.png.webp',
        title:'Tecno Pova 2 6GB l 128GB - Điện Thoại Thông Minh Chiến Game Cực Đỉnh - Hàng Chính Hãng',
        sold:890,
        star:45,
        price:3690000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/fa/ec/aa/0c973b43b23266bb2ac5047caf7788f4.jpg.webp',
        title:'Tai nghe có dây dành cho iPhone Remax RM512i - Hàng chính hãng',
        sold:890,
        star:5,
        price:369000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/15/1a/01/a8081f664e69cb2f04eebbead96dd7cf.jpg.webp',
        title:'Smart Tivi QLED Samsung 4K 55 inch QA55Q60A',
        sold:200,
        star:4,
        price:20000000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/46/d4/6c/74c3659680aaab220317cac64e1eb3df.jpg.webp',
        title:'Tủ lạnh Samsung Inverter 208 lít RT19M300BGS/SV',
        sold:300,
        star:5,
        price:5150000,
        discount:19
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/bd/fc/d4/0d9018d37b8b291776ec169ab4d0bef3.jpg.webp',
        title:'Máy Giặt Samsung Inverter 9 kg WW90T634DLN',
        sold:120,
        star:5,
        price:12710000,
        discount:45
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/media/catalog/producttmp/bf/16/33/24aa58143fefa22f27449c99817bafad.jpg.webp',
        title:'Android Tivi Sony 4K 55 inch XR-55X90J',
        sold:200,
        star:4,
        price:23960000,
        discount:15
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/ff/5d/b2/b9881bd26f1dfb46df63dfcd57922baa.jpg.webp',
        title:'Android Tivi Sony 4K 65 inch XR-65X90J',
        sold:50,
        star:5,
        price:24900000,
        discount:12
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/6a/70/44/1418bc6171077b515e9f14d19d7bcd3e.jpg.webp',
        title:'Smart Tivi Coocaa Android 10 65 inch - Model 65S6G Pro Max - Hàng chính hãng',
        sold:20,
        star:5,
        price:14490000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/e5/95/13/2b36f02fd030b2115ef5be392b10a9cf.jpg.webp',
        title:'Smart Tivi QLED Samsung 4K 55 inch QA55Q60A',
        sold:200,
        star:4,
        price:20000000,
        discount:20
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/15/1a/01/a8081f664e69cb2f04eebbead96dd7cf.jpg.webp',
        title:'Combo 5 đồ bộ ba lỗ bé trai, quần áo sát nách MIMYKID in 3D',
        sold:2000,
        star:4,
        price:219000,
        discount:25
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/92/98/96/7d7ccad5d9c4ace2411b86b12e559751.jpg.webp',
        title:'Áo ba lỗ bé trai bé gái LOTUKA dễ thương, quần áo cho bé mặc nhà, Bộ quần áo trẻ em mùa hè 4-18kg',
        sold:2500,
        star:4,
        price:50000,
        discount:50
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/08/b3/eb/fe183beb8a9075721b2b011d3f52ad35.png.webp',
        title:'Tecno Pova 2 6GB l 128GB - Điện Thoại Thông Minh Chiến Game Cực Đỉnh - Hàng Chính Hãng',
        sold:890,
        star:5,
        price:3690000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/d6/a0/dc/b3b76053c68a231b097031da5a61b575.jpg.webp',
        title:'Điện Thoại Samsung Galaxy M51 (8GB/128GB) - Hàng Chính Hãng - Đã kích hoạt bảo hành điện tử',
        sold:800,
        star:5,
        price:5790000,
        discount:28
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/dd/c2/c0/f7cf2c7b41247751191bb2aecae6534e.jpg.webp',
        title:'Điện Thoại Xiaomi Redmi Note 11 4GB/128GB - Hàng Chính Hãng',
        sold:500,
        star:5,
        price:4190000,
        discount:23
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/e4/d1/c1/7d7923c3ed0f781e4eaae4972f9faf86.jpg.webp',
        title:'Điện thoại Samsung Galaxy S22 Ultra 5G (12GB/256GB) - Hàng Chính Hãng',
        sold:800,
        star:5,
        price:27990000,
    },
    {
        img:'https://salt.tikicdn.com/cache/400x400/ts/product/08/b3/eb/fe183beb8a9075721b2b011d3f52ad35.png.webp',
        title:'Tecno Pova 2 6GB l 128GB - Điện Thoại Thông Minh Chiến Game Cực Đỉnh - Hàng Chính Hãng',
        sold:890,
        star:45,
        price:3690000,
        discount:26
    },
    {
        img:'https://salt.tikicdn.com/cache/200x200/ts/product/fa/ec/aa/0c973b43b23266bb2ac5047caf7788f4.jpg.webp',
        title:'Tai nghe có dây dành cho iPhone Remax RM512i - Hàng chính hãng',
        sold:890,
        star:5,
        price:369000,
        discount:26
    },
  ]
  useEffect(function(){
    setDatas(()=>{
        const data1 = datas.slice(0,pageSize)
        return data1
    })
  },[pageSize])
  const handleClick = ()=>{
    if(pageSize < datas.length){
        setPageSize(pageSize => (pageSize +18))
    }
  }
  return (  
    <div className={style.PruductList}>
         {
            data.map(function(item){
                return(
                    <div className={style.Card}>
                        <img src={item.img} />
                        <div className={style.content}>
                            <div className={style.info}>
                                <h3>
                                    {item.title}
                                </h3>
                                <div className={style.rate}>
                                    <Rate disabled allowHalf defaultValue={item.star} />
                                    <span>  | Đã bán {item.sold}</span>
                                </div>
                            </div>
                            <div className={clsx(style.price,{
                                [style.discount]:item.discount
                            })}>
                                <span>{item.price.toLocaleString()} <b><u>d</u></b></span>
                                <span>{`-${item.discount}%`}</span>
                            </div>
                        </div>
                    </div>
                )
            })
         } 
         <button className={style.loadMore} onClick={handleClick}>Xem Thêm</button>  
    </div>
  )
}

export default PruductList