# 3V2T
## **Github công nghệ phần mềm cờ caro**
***
## TỔNG QUAN
### Giới thiệu
- Công nghệ thông tin trong giai đoạn hiện nay đang có những bước phát triển như vũ bão trên mọi lĩnh vực hoạt động ở khắp nơi trên thế giới. Cùng với sự phát triển vượt bậc của CNTT, con người đã cho ra đời rất nhiều sản phẩm mang tính giải trí mạnh mẽ và hấp dẫn, tuy nhiên những chương trình nhỏ mang tính trí tuệ vẫn chiếm một thị phần nào đó trong lĩnh vực này. Một trong những chương trình đó phải kể tới là các chương trình chơi cờ, đại diện là “Trò chơi cờ Caro". Cờ Caro được khá nhiều người ưa thích vì tính đơn giản của trò chơi nhưng bản thân lại mang tính trí tuệ khá cao.
- Cờ Caro là một trò chơi dân gian dùng viết trên bàn cờ giấy với số lượng ô không giới hạn. Hai người chơi, người dùng ký hiệu O, người kia dùng ký hiệu X, lần lượt điền ký hiệu của mình vào các ô. Người thắng là người tạo được đầu tiên một chuỗi liên tục gồm 5 ô hàng ngang, hàng dọc hoặc chéo.
- Từ các kiến thức sẵn có nhóm em quyết định sẽ tạo ra một chương trình chơi cờ caro.
- Lý do chọn đề tài:
  +	Trò chơi cờ caro là một trò chơi phổ biến, được nhiều người yêu thích, có luật chơi đơn giản, dễ học, dễ chơi, phù hợp với mọi lứa tuổi.
  +	Web chơi cờ caro có thể được phát triển với nhiều tính năng hấp dẫn, giúp người chơi có được trải nghiệm tốt hơn.
  +	Trò chơi này có thể được chơi trực tuyến, mang lại sự tiện lợi cho người chơi.
  +	Việc xây dựng web chơi cờ caro là một cơ hội để học hỏi và rèn luyện kỹ năng lập trình.
### Mục tiêu và phạm vi đề tài
- Tạo giao diện hấp dẫn và thân thiện: Xây dựng một giao diện người dùng đẹp mắt, dễ sử dụng và tương tác. Đảm bảo rằng người dùng có trải nghiệm trực quan và thoải mái khi sử dụng ứng dụng. phạm vi không bao gồm việc phát triển giao diện đa nền tảng, mà tập trung vào các trình duyệt phổ biến và đảm bảo sự tương thích trên các trình duyệt này.
- Đơn giản hóa đăng ký và đăng nhập: Cung cấp một hệ thống đăng ký và đăng nhập dễ tiếp cận và sử dụng trên các trình duyệt phổ biến. Quá trình đăng ký và đăng nhập nhanh chóng, thuận tiện và không gây khó khăn cho người dùng.  Không bao gồm việc tích hợp các cơ chế bảo mật phức tạp như xác thực hai yếu tố hoặc đăng nhập bằng các dịch vụ bên thứ ba.
- Hỗ trợ chơi đơn và chơi cùng người chơi khác: Tạo ra chế độ chơi đơn cho phép người dùng tùy chỉnh độ khó và thách thức bản thân. Đồng thời, cung cấp khả năng chơi cùng người chơi khác trên cùng một thiết bị, mang đến trải nghiệm chơi game tương tác và thú vị.
- Tích hợp tính năng lưu và tạo ván đấu mới: Cho phép người dùng lưu trạng thái ván đấu với máy và tiếp tục chơi sau này. Tạo cơ chế tạo ván đấu mới để người dùng có thể thử thách và khám phá nhiều hơn. Tuy nhiên, tính năng này không áp dụng cho việc chơi với người chơi khác, chỉ giới hạn trong phạm vi chơi đơn.
- Tối ưu hóa hiệu suất và xử lý mượt mà: Tối ưu hóa hệ thống để đảm bảo xử lý nhanh chóng và mượt mà. Áp dụng thuật toán thông minh để xử lý đường đi của máy và tính toán kết quả một cách hiệu quả và chính xác nhất.
### Phát biểu bài toán
- Trong thời điểm hiện tại, nhu cầu giải trí thông qua trò chơi đã trở thành một yếu tố không thể thiếu trong cuộc sống hàng ngày của con người. Trò chơi trực tuyến ngay trên trình duyệt web mà không cần cài đặt phần mềm bổ sung đã trở thành một xu hướng phổ biến và được ưa chuộng ngày càng nhiều.
- Bài toán của chúng ta là phát triển một trò chơi Caro trực tuyến trên nền tảng web, nhằm đáp ứng nhu cầu giải trí của người chơi chỉ với việc sở hữu một trình duyệt và một tài khoản. Trò chơi này sẽ mang đến cho người dùng một trải nghiệm chơi game tuyệt vời mà không cần đầu tư quá nhiều vào phần cứng hay phần mềm phức tạp.
- Trò chơi Caro trên web sẽ được xây dựng với một giao diện người dùng hấp dẫn, dễ sử dụng và thân thiện. Giao diện này sẽ được thiết kế bằng HTML, CSS và JavaScript, với sự hỗ trợ của thư viện ReactJS để tạo ra một trải nghiệm chơi game mượt mà và nhanh chóng. Điều này cho phép người chơi tận hưởng trò chơi một cách trực quan và thú vị, với các hiệu ứng động, âm thanh sống động và giao diện tương tác.
- Để tối ưu hiệu suất và mang đến trải nghiệm người dùng mượt mà hơn, trò chơi Caro trực tuyến sẽ được phát triển dưới dạng một trang web đơn trang (Single Page Application). Điều này cho phép trò chơi chỉ tải lại các phần cần thiết khi người dùng tương tác, giúp giảm thời gian phản hồi và cải thiện trải nghiệm chơi game trực tuyến.
- Server của web cho trò chơi Caro sẽ được xây dựng trên môi trường NodeJS, sử dụng ngôn ngữ lập trình JavaScript. Sử dụng NodeJS giúp xây dựng một server có khả năng xử lý hiệu suất tốt, cung cấp khả năng mở rộng linh hoạt khi có nhu cầu. Để lưu trữ dữ liệu của trò chơi, chúng ta sẽ sử dụng cơ sở dữ liệu MySQL. MySQL là một hệ quản trị cơ sở dữ liệu phổ biến và tin cậy, cho phép lưu trữ và truy vấn dữ liệu một cách chặt chẽ và hiệu quả.
- Để cung cấp các dịch vụ cho người dùng và admin dễ dàng quản lý, tối ưu và chỉnh sửa trò chơi, chúng ta sẽ xây dựng các API từ server. API sẽ cho phép người dùng truy cập vào các chức năng và tính năng của trò chơi, bao gồm tạo tài khoản, đăng nhập, tìm kiếm và tham gia các trận đấu Caro. Các API này cũng sẽ hỗ trợ việc quản lý dữ liệu người dùng, lưu trữ lịch sử chơi và điểm số, và cung cấp thông tin về các trận đấu đã diễn ra và kết quả của chúng.
***
## KHẢO SÁT HIỆN TRẠNG VÀ XÁC ĐỊNH YÊU CẦU
### Khảo sát hiện trạng
- Giới thiệu sơ lược về hệ thống mà nhóm đã khảo sát:
  +	Bàn cờ: Bàn cờ caro có kích thước 15x15 ô vuông. Các ô vuông được đánh số từ 1 đến 15.
  +	Quân cờ: Mỗi người chơi sẽ điều khiển một quân cờ có hình dạng khác nhau là O hoặc X . Quân cờ được đặt vào các ô vuông trống trên bàn cờ.
  +	Luật chơi: Luật chơi cờ caro đồ án tương tự như luật chơi cờ caro truyền thống. Người chơi sẽ thay phiên nhau đặt quân cờ của mình vào các ô vuông trống trên bàn cờ. Mục tiêu của trò chơi là tạo thành một hàng liên tiếp 5 quân cờ của mình theo chiều ngang, dọc hoặc chéo. Người chơi đầu tiên tạo được hàng liên tiếp 5 quân cờ sẽ giành chiến thắng.
  +	Giao diện người dùng: Giao diện người dùng của hệ thống chơi cờ caro đồ án được thiết kế đơn giản và dễ sử dụng. Người chơi có thể dễ dàng thao tác trên giao diện để chơi cờ caro.
  +	Thuật toán AI: Hệ thống chơi cờ caro đồ án sử dụng thuật toán AI để điều khiển quân cờ của máy. Thuật toán AI này được thiết kế để có thể chơi cờ caro ở mức độ cao.
-	Trình bày chi tiết quy trình nghiệp vụ của từng công việc diễn ra bên trong hệ thống:
- Quy trình nghiệp vụ khởi động hệ thống
  + Bước 1: Người chơi khởi động hệ thống chơi cờ caro đồ án bằng cách nhấn vào biểu tượng của hệ thống trên màn hình máy tính.
  + Bước 2: Hệ thống sẽ kiểm tra các yêu cầu hệ thống và khởi động các thành phần cần thiết.
  + Bước 3: Hệ thống sẽ hiển thị giao diện người dùng cho người chơi.
- Quy trình nghiệp vụ chọn chế độ chơi
  + Bước 1: Người chơi chọn tab "Chế độ chơi" trên giao diện người dùng.
  + Bước 2: Hệ thống sẽ hiển thị danh sách các chế độ chơi.
  + Bước 3: Người chơi chọn chế độ chơi mong muốn.
- Quy trình nghiệp vụ chọn màu quân cờ
  + Bước 1: Người chơi chọn tab "Màu quân cờ" trên giao diện người dùng.
  + Bước 2: Hệ thống sẽ hiển thị danh sách các màu quân cờ.
  + Bước 3: Người chơi chọn màu quân cờ mong muốn.
- Quy trình nghiệp vụ bắt đầu trò chơi
  + Bước 1: Người chơi nhấn vào nút "Bắt đầu" trên giao diện người dùng.
  + Bước 2: Hệ thống sẽ bắt đầu trò chơi và hiển thị bàn cờ trống.
  + Bước 3: Người chơi bắt đầu trò chơi bằng cách đặt quân cờ của mình vào ô vuông trống đầu tiên.
- Quy trình nghiệp vụ thay phiên nhau đặt quân cờ
  + Bước 1: Người chơi chọn ô vuông trống mà họ muốn đặt quân cờ.
  + Bước 2: Người chơi nhấn vào nút "Đặt quân cờ" trên giao diện người dùng.
  + Bước 3: Hệ thống sẽ đặt quân cờ của người chơi vào ô vuông đã chọn.
  + Bước 4: Người chơi tiếp theo sẽ thực hiện bước 1 đến bước 3 để đặt quân cờ của mình.
- Quy trình nghiệp vụ tạo hàng liên tiếp 5 quân cờ
  + Bước 1: Người chơi đặt 5 quân cờ của mình thành một hàng liên tiếp theo chiều ngang, dọc hoặc chéo.
  + Bước 2: Người chơi đó sẽ giành chiến thắng.
- Quy trình nghiệp vụ kết thúc trò chơi
  + Bước 1: Trò chơi kết thúc khi một trong hai người chơi tạo thành một hàng liên tiếp 5 quân cờ của mình hoặc khi không còn ô vuông trống trên bàn cờ.
  + Bước 2: Hệ thống sẽ hiển thị thông báo kết quả trò chơi.
- Quy trình nghiệp vụ chơi cờ caro 1 người
  + Bước 1: Người chơi chọn chế độ chơi "1 người".
  + Bước 2: Hệ thống sẽ tạo ra một đối thủ AI để chơi cùng người chơi.
  + Bước 3: Người chơi và đối thủ AI sẽ thay phiên nhau đặt quân cờ theo quy trình nghiệp vụ thay phiên nhau đặt quân cờ.
  + Bước 4: Người chơi hoặc đối thủ AI sẽ giành chiến thắng theo quy trình nghiệp vụ tạo hàng liên tiếp 5 quân cờ.
- Quy trình nghiệp vụ chơi cờ caro 2 người
  + Bước 1: Hai người chơi chọn chế độ chơi "2 người".
  + Bước 2: Hai người chơi sẽ thay phiên nhau đặt quân cờ theo quy trình nghiệp vụ thay phiên nhau đặt quân cờ.
  + Bước 3: Hai người chơi sẽ giành chiến thắng theo quy trình nghiệp vụ tạo hàng liên tiếp 5 quân cờ.
- Quy trình nghiệp vụ sử dụng thuật toán AI
  + Bước 1: Hệ thống sẽ sử dụng thuật toán AI để đánh giá các khả năng đặt quân cờ của mình.
  + Bước 2: Hệ thống sẽ chọn khả năng đặt quân cờ có khả năng chiến thắng cao nhất.
  + Bước 3: Hệ thống sẽ đặt quân cờ của mình vào ô vuông trống theo khả năng đã chọn.
### Yêu cầu phần mềm
**Yêu cầu chức năng**
- Kết nạp người chơi mới
  + Người chơi có thể đăng ký tài khoản mới bằng cách cung cấp thông tin cơ bản như tên, email và mật khẩu.
  + Email xác nhận sẽ được gửi đến người chơi sau khi đăng ký thành công.
- Tạo ván đấu
  + Người chơi có thể tạo ván đấu mới với các chế độ chơi như:
    * Chơi 2 người
    * Chơi với máy
- Lưu ván đấu đang chơi
  + Người chơi có thể lưu ván đấu đang chơi để tiếp tục sau.
  + Ván đấu được lưu lại sẽ bao gồm thông tin về các nước đi của cả hai người chơi.
- Tiếp tục ván đấu
  + Người chơi có thể tiếp tục ván đấu đã lưu.
- Xem thông tin người chơi
  + Người chơi có thể xem thông tin của bản thân như điểm số, số trận thắng, thua, hòa, và thứ hạng.
  + Người chơi có thể đổi tên của mình.
- Xem thứ hạng
  + Người chơi có thể xem thứ hạng của bản thân trên tổng số người chơi.
- Quản lý người chơi
  + Admin có thể thêm, xóa, sửa, cập nhật thông tin người chơi và thống kê người chơi
**Yêu cầu phi chức năng**
- Yêu cầu về hiệu năng
  + Hệ thống phải đáp ứng được nhu cầu chơi game của nhiều người cùng lúc.
  + Thời gian phản hồi của hệ thống phải nhanh chóng.
- Yêu cầu về khả năng mở rộng
  + Hệ thống phải có khả năng mở rộng để đáp ứng nhu cầu phát triển trong tương lai.
**Kiến trúc hệ thống**
- Mô hình kiến trúc
  + Hệ thống được thiết kế theo mô hình client-server.
  + Client là trình duyệt web của người dùng.
  + Server là máy chủ web cung cấp dịch vụ cho client.
- Các thành phần chính
  + Thành phần front-end
    * Trình duyệt web của người dùng
    * Các trang web cung cấp giao diện cho người dùng
  + Thành phần back-end
    * Máy chủ web
    * Các dịch vụ cung cấp cho người dùng
    * Cơ sở dữ liệu lưu trữ dữ liệu người dùng
### Các mô hình đặc tả yêu cầu
-	Use Case Diagram của phần mềm:
![image](https://github.com/lqt1893/3V2T/assets/93394403/2b726649-cc0d-4679-9786-2c97a2383dd3)
-	Mô tả từng Use Case:

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Đăng kí|
  |Mô tả|Cho phép người dùng đăng ký|
  |Actor|Người chơi|
  |Điều kiện kích hoạt|Khi người dùng chọn chức năng đăng ký|
  |Tiền điều kiện|Người dùng chưa có tài khoản|
  |Hậu điều kiện|Đăng ký thành công|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Đăng nhập|
  |Mô tả|Cho phép người dùng đăng nhập|
  |Actor|Người chơi, admin|
  |Điều kiện kích hoạt|Khi người dùng chọn chức năng đăng nhập|
  |Tiền điều kiện|Người dùng đã có tài khoản|
  |Hậu điều kiện|Đăng nhập thành công|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Tiếp tục ván đấu|
  |Mô tả|Cho phép người dùng tiếp tục ván đấu|
  |Actor|Người chơi|
  |Điều kiện kích hoạt|Khi người dùng chọn chức năng tiếp tục ván đấu|
  |Tiền điều kiện|Người dùng đã đăng nhập và đã tạo ván đấu trước đó|
  |Hậu điều kiện|Tiếp tục ván đấu thành công|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Xem thông tin người chơi|
  |Mô tả|Cho phép người dùng xem thông tin|
  |Actor|Người chơi|
  |Điều kiện kích hoạt|Khi người dùng chọn chức năng xem thông tin người chơi|
  |Tiền điều kiện|Người dùng đã có đăng nhập|
  |Hậu điều kiện|Xem thông tin thành công|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Xem thứ hạng bản thân|
  |Mô tả|Cho phép người dùng xem thứ hạng bản thân|
  |Actor|Người chơi|
  |Điều kiện kích hoạt|Khi người dùng chọn chức năng xem thứ hạng bản thân|
  |Tiền điều kiện|Người dùng đã đăng nhập|
  |Hậu điều kiện|Xem thứ hạng thành công|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Báo lỗi xác thực|
  |Mô tả|Báo lỗi khi đăng nhập không thành công|
  |Actor|Hệ thống|
  |Điều kiện kích hoạt|Khi người dùng đăng nhập không thành công|
  |Tiền điều kiện|Người dùng sai thông tin đăng nhập|
  |Hậu điều kiện|Xuất ra thông báo lỗi|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Xác thực tài khoản|
  |Mô tả|Cấp quyền truy cập khi đăng nhập thành công|
  |Actor|Hệ thống|
  |Điều kiện kích hoạt|Khi người dùng đăng nhập thành công|
  |Tiền điều kiện|Người dùng nhập đúng thông tin đăng nhập|
  |Hậu điều kiện|Cấp quyền truy cập|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Kết nạp người chơi|
  |Mô tả|Kết nạp người chơi mới|
  |Actor|Hệ thống|
  |Điều kiện kích hoạt|Khi người dùng đăng ký thành công|
  |Tiền điều kiện|Người chơi đã đăng ký tài khoản|
  |Hậu điều kiện|Cấp quyền truy cập vào tài khoản đã đăng ký|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Cập nhật thông tin người chơi|
  |Mô tả|Cho phép admin cập nhật thông tin người chơi|
  |Actor|Admin|
  |Điều kiện kích hoạt|Khi admin chọn chức năng cập nhật thông tin người chơi|
  |Tiền điều kiện|Đã đăng nhập|
  |Hậu điều kiện|Cập nhật thành công|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Thêm người chơi|
  |Mô tả|Cho phép admin thêm người chơi |
  |Actor|Admin|
  |Điều kiện kích hoạt|Khi admin chọn chức năng thêm người chơi|
  |Tiền điều kiện|Đã đăng nhập|
  |Hậu điều kiện|Thêm thành công|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Xóa người chơi|
  |Mô tả|Cho phép admin xóa người chơi |
  |Actor|Admin|
  |Điều kiện kích hoạt|Khi admin chọn chức năng xóa người chơi|
  |Tiền điều kiện|Đã đăng nhập|
  |Hậu điều kiện|Xóa thành công|

  |Tiêu đề|Nội dung|
  |:-----:|:------:|
  |Tên Use Case|Thống kê số người chơi trong tháng|
  |Mô tả|Cho phép admin thống kê số người chơi trong tháng|
  |Actor|Admin|
  |Điều kiện kích hoạt|Khi admin chọn chức năng thống kê số người chơi trong tháng|
  |Tiền điều kiện|Đã đăng nhập|
  |Hậu điều kiện|Thống kê thành công|

- Sơ đồ BPM (Business Process Model) cho từng nghiệp vụ:
![image](https://github.com/lqt1893/3V2T/assets/93394403/396accd0-9e9c-41b2-b361-6f03fb909f27)
***
## PHÂN TÍCH PHẦN MỀM
### Giới thiệu sự cần thiết và tầm quan trọng của giai đoạn phân tích
- Giai đoạn phân tích là giai đoạn đầu tiên và quan trọng nhất trong quy trình phát triển phần mềm. Giai đoạn này có nhiệm vụ thu thập, phân tích và hiểu rõ các yêu cầu của hệ thống phần mềm từ khách hàng.
- Sự cần thiết và tầm quan trọng của giai đoạn phân tích được thể hiện ở các điểm sau:
  + Đảm bảo hệ thống phần mềm đáp ứng đúng nhu cầu của khách hàng: Giai đoạn phân tích giúp thu thập và hiểu rõ các yêu cầu của khách hàng, từ đó đảm bảo hệ thống phần mềm được xây dựng đáp ứng đúng nhu cầu của khách hàng.
  + Giảm thiểu chi phí và thời gian phát triển phần mềm: Giai đoạn phân tích giúp phát hiện sớm các vấn đề và sai sót, từ đó giúp giảm thiểu chi phí và thời gian phát triển phần mềm.
  + Nâng cao chất lượng phần mềm: Giai đoạn phân tích giúp đảm bảo hệ thống phần mềm được xây dựng một cách khoa học và chặt chẽ, từ đó nâng cao chất lượng phần mềm.
### Phân tích dữ liệu
#### Giới thiệu mô hình thực thể kết hợp ERD (mô hình dữ liệu mức quan niệm - CDM)
- Mô hình thực thể kết hợp (ERD) là một sơ đồ mô hình hóa dữ liệu được sử dụng để mô tả các thực thể và mối quan hệ giữa chúng trong một hệ thống. ERD là một công cụ quan trọng trong việc thiết kế cơ sở dữ liệu, giúp các nhà phát triển hiểu rõ hơn về dữ liệu mà họ sẽ lưu trữ và cách dữ liệu đó sẽ được sử dụng.
- ERD có một số đặc điểm cơ bản sau:
  + Sử dụng các biểu tượng để đại diện cho các thực thể và mối quan hệ. Các biểu tượng ERD tiêu chuẩn bao gồm:
    * Thực thể: Một đối tượng cụ thể trong thế giới thực, chẳng hạn như một người, một sản phẩm hoặc một địa điểm. Các thực thể được biểu thị bằng các hình chữ nhật.
    * Mối quan hệ: Một liên kết giữa hai hoặc nhiều thực thể. Các mối quan hệ được biểu thị bằng các đường nối các thực thể.
  + Sử dụng các thuộc tính để mô tả các thực thể. Các thuộc tính là các phần thông tin được lưu trữ về một thực thể. Các thuộc tính được biểu thị bằng các vòng tròn nhỏ bên cạnh các thực thể.
  + Sử dụng các khóa chính và khóa ngoại để xác định các thực thể. Khóa chính là một thuộc tính duy nhất xác định một thực thể. Khóa ngoại là một thuộc tính tham chiếu đến khóa chính của một thực thể khác.
  ERD có một số chức năng chính sau:
  + Hỗ trợ việc hiểu và phân tích dữ liệu. ERD giúp các nhà phát triển hiểu rõ hơn về dữ liệu mà họ sẽ lưu trữ và cách dữ liệu đó sẽ được sử dụng. Điều này có thể giúp họ tránh các lỗi thiết kế và đảm bảo rằng cơ sở dữ liệu đáp ứng được nhu cầu của doanh nghiệp.
  + Hỗ trợ việc thiết kế cơ sở dữ liệu. ERD là một công cụ quan trọng trong việc thiết kế cơ sở dữ liệu. Nó giúp các nhà phát triển xác định các thực thể và mối quan hệ cần thiết cho cơ sở dữ liệu.
  + Hỗ trợ việc giao tiếp với các bên liên quan. ERD là một công cụ hữu ích để giao tiếp với các bên liên quan về thiết kế cơ sở dữ liệu. Nó giúp các nhà phát triển mô tả một cách trực quan các thực thể và mối quan hệ trong hệ thống.
#### Mô hình thực thể kết hợp
![image](https://github.com/lqt1893/3V2T/assets/93394403/6491a3ad-8967-4eea-babb-3170c91782fa)
#### Sưu liệu cho mô hình thực thể kết hợp
Các thông tin cơ bản của mô hình thực thể kết hợp 
  - Thực thể:
    +	Game: Ván đấu được tạo ra khi người chơi thực hiện chứ năng tạo ván đấu.
    +	User: Là người chơi. Sau khi đăng nhập, người chơi có thể sử dụng các chức năng của trò chơi và thông tin của người chơi và ván đấu sẽ được lưu trong CSDL.
  - Thuộc tính:
    +	Game:
      •	id: Mã trận đấu.
      •	player_id: Mã người chơi.
      •	opponent_name: Tên đối thủ.
      •	score: Điểm số của trận đấu.
      •	game_type: Loại trò chơi.
      •	difficulty: Độ khó của trò chơi.
      •	play_time: Thời gian chơi.
      •	start_time: Thời gian bắt đầu.
      •	status: Trạng thái của trận đấu.
      •	data: Dữ liệu của trận đấu.
      •	next_move: Lượt đi tiếp theo (Dùng cho chức năng lưu ván đấu).
    +	User:
      •	id: Mã người chơi.
      •	name: Tên người chơi.
      •	username: Tên tài khoản.
      •	password: Mật khẩu.
      •	email: Địa chỉ email.
      •	admin: Người quản lý (kiểm tra xem user có phải là quản lí).
      •	score: Điểm số của người chơi.
  –	Mối quan hệ giữa các thực thể:
    +	Một người chơi có thể tham gia nhiều trận đấu.
    +	Một trận đấu có thể có nhiều người chơi.
    +	Một admin có thể quản lí nhiều người chơi.

