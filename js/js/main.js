function TinhTien(){
var thuNhapThang =document.getElementById("thuThang").value;
var tienvay =document.getElementById("tienVay").value;
var laiSuat =document.getElementById("laiSuat").value;
var thoiHan =document.getElementById("thoihan").value;

var thuThang = Number(thuNhapThang);
 var tienvay= Number(tienvay);
 var laiSuat = Number(laiSuat);
 var thoiHan = Number(thoiHan);
 

    var soTienTra1Thang = thuThang*0.6;
    var soTienTraTrong1Thang =(tienvay*(1+laiSuat))/thoiHan;
    
    //tra ve 
    var SoTienTra1thang=document.getElementById("soTienTra")    ;
    var SotientraTrong1thang=document.getElementById("sotienphaitra");
     //kết quả 
    soTienTra1thang.textContent = "Số tiền Có thể trả mỗi tháng: "+soTienTra1Thang;
    SotientraTrong1thang.textContent="Số tiền trả mỗi tháng : " +soTienTraTrong1Thang;


     var dkien01=soTienTra1Thang>soTienTra1Thang;
    //  if(dkien01){
    //      soTienTra1Thang.
    //  }
  
    
}