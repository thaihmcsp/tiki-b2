import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import style from './basicInfo.module.css'
import { Input } from 'antd'
import { Cascader } from 'antd';
import './basicInfor.css'
import { getAPI } from '../../../../../../../config/api';
import { useSelector,useDispatch } from 'react-redux'
import { ChangeProductName,ChangeCatagoryName } from '../../../EditProductSlice';
import { loadImages } from './ImageSliceReducer';


const getBase64 = (file) => {
  
  console.log(13,file)
  return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
      })
  };
function BasicInfo() {
    const dispatch = useDispatch()
    const newData = useSelector(state=>{
      return state.eidtProduct
    })
    const [listCatagory,setListCatagory] = useState([])
    useEffect(function(){
      getAPI('/category/get-all-categories')
        .then(data=>{
          const catagory = data.data.listCategories
          setListCatagory(()=>{
            return catagory.map(item=>{
              return {
                Name:item.categoryName,
                id: item._id
              }
            })
          })
        })
        .catch(error=>{ 
          console.log(error)
        })
    },[])
    const options = listCatagory.map(item=>{
      return {
        value : item.Name,
        label: item.Name,
        id:item.id
      }
    })
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([])
    const handleCancel = () => setPreviewVisible(false);
    const { TextArea } = Input;

    const onChange = (e) => {
      dispatch(ChangeProductName(e.target.value))
    };
      
  const onChange1 = (value,label) => {
    console.log(67,label)
    dispatch(ChangeCatagoryName({
      category: value[0],
      id: label[0].id
    }))
  };
    const handlePreview = async (file) => {

      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
  
      setPreviewImage(file.url || file.preview);
      setPreviewVisible(true);
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
  
    const handleChange = ({ fileList: newFileList }) => {
      console.log(87, newFileList);
      const newData = newFileList.map(item=>{
        return JSON.stringify(item.originFileObj)
      })
      dispatch(loadImages(newData))
      return setFileList(newFileList)
    };
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div
          style={{
            marginTop: 8,
          }}
        >
          Upload
        </div>
      </div>
    );
  return (
    <div className={style.BasicInfo} id='Basic_infomation'>
        <h2 className={style.title}>
            Thông tin cơ bản
        </h2>
        <p className={style.subTitle}>
            Ảnh sản phẩm
        </p>
        <p className={style.des}>
            Đây là hình ảnh chính trên trang sản phẩm. Bạn có thể up nhiều hình ảnh cùng lúc và tối đa có thể có 8 hình. Hình ảnh cần có kích thước từ 330x300 px đến 5000x5000px và không dược phép chứa nội dung nhạy cảm. Kích thước tối đa: 3 MB
        </p>
        <div className={style.upload}>
            <div>
                <form id='thump-form'>
                  <Upload
                      name='thump'
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                  >
                      {fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                </form>
                <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                    />
                </Modal>
            </div>
            <div className={style.lable}>
                <a>Đăng tải</a>
                |
                <a>Thư viện đa phương tiện</a>
            </div>
        </div>
        <div className={style.info}>
            <label>
                <span className={style.star}>*</span> Tên Sản Phẩm:
                <div className={style.Input}>
                    <>
                        <Input showCount maxLength={255} onChange={onChange}
                        placeholder='Ex. Nikon Coolpix A300 Máy Ảnh Kĩ Thuật Số'
                        className='input_additem' value={newData.productName}
                        />
                        
                    </>
                    <a>Add multi-languages</a>
                </div>
            </label>
        </div>
        <div className={style.info}>
            <label>
                <span className={style.star}>*</span> Danh Mục Ngành Hàng:
                <div className={style.Input}>
                    <Cascader options={options} onChange={onChange1} placeholder="Lựa chọng nghành hàng" className='selected_product' 
                    value={newData.categoryId?newData.categoryId.categoryName:''}
                    />
                </div>
            </label>
        </div>
    </div>
  )
}

export default BasicInfo