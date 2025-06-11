import React from 'react'
import Page from '../Page'
import './About2Page.scss'
const About2Page = () => {
  return (
      <>
      <Page requireHomeOffice2={false} panelContent={{
        title: "Trải Nghiệm Kiến Trúc Số",
        quote: "Trực quan, tương tác, cảm xúc – nơi kiến trúc trở nên sống động.",
        content: [
         "Chúng tôi bắt đầu bằng việc chuyển hóa ý tưởng thiết kế thành một hành trình khám phá không gian trực quan. Thay vì chỉ trình bày qua hình ảnh tĩnh, mỗi showroom được thiết kế như một môi trường số nơi người dùng có thể tự do tương tác, cảm nhận và kết nối cảm xúc với không gian. Đây là cách chúng tôi mang tinh thần thiết kế đến gần hơn với người xem.",
         "Đằng sau trải nghiệm mượt mà là một hệ thống được xây dựng từ cấu trúc kỹ thuật ổn định và tối ưu. Chúng tôi sử dụng các công nghệ đồ họa hiện đại kết hợp với kỹ thuật lập trình hiệu suất cao, giúp không gian vận hành trơn tru trên nền tảng web.",
	        "Người dùng không chỉ quan sát, mà còn trực tiếp tương tác với từng chi tiết trong showroom từ việc xoay góc nhìn đến khám phá bố cục nội thất. Mọi thao tác đều được phản hồi tức thì, tạo cảm giác chủ động và chân thực như đang bước vào một không gian thật. Trải nghiệm ấy không chỉ thể hiện thiết kế, mà còn khơi gợi cảm xúc và kết nối người dùng với ý tưởng bên trong không gian.",
  	],
      }}
        imageSrc={"images/about2.webp"}
      /> 
    </>
  )
}

export default About2Page
