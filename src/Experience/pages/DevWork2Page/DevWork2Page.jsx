import React from 'react'
import Page from '../Page'
import './DevWork2Page.scss'

const DevWork2Page = () => {
  return (
    <>
        {/* <div className="title">Hello from DevWork2Page</div> */}
          <Page requireHomeOffice2={false} panelContent={{
            title: "Home Office 2",
            quote: "Tối giản trong bố cục, hiện đại trong cảm hứng.",
            content: [
         "Không gian được thiết kế theo phong cách tối giản, với gam màu beige chủ đạo mang lại cảm giác ấm áp và thanh thoát. Bàn gỗ, kệ sách mở và đèn để bàn được bố trí khéo léo, tạo nên một góc làm việc tiện nghi, góp phần nâng cao hiệu suất và cảm hứng sáng tạo. Sự kết hợp hài hòa giữa sắc beige nhẹ nhàng, sàn gỗ tự nhiên và điểm xuyết cây xanh giúp không gian trở nên gần gũi, thư thái và dễ chịu.",
         "Từng vật dụng được sắp đặt khéo léo để không chỉ hỗ trợ công việc mà còn mang lại cảm giác thư giãn. Đây là nơi dung hòa giữa thẩm mỹ hiện đại và hiệu quả sử dụng – một home office lý tưởng cho những ai tìm kiếm sự cân bằng giữa sáng tạo và hiệu suất.",
  	    ],
      }}
        imageSrc={"images/devwork2.webp"}
      />
    </>
  )
}

export default DevWork2Page
