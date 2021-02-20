function sendit(){
    const userpw = document.getElementById('userpw');
    const userpw_re = document.getElementById('userpw_re');
    const hp = document.getElementById('hp');
    const email = document.getElementById('email');
    const isSSN = document.getElementById('isSSN');

    // 정규식
    const expPwText = /^.*(?=^.{4,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()+=]).*$/;
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
    const expEmailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z0-9\.\-]+$/;

    if(userpw.value == ''){
        alert('비밀번호를 입력하세요.');
        userpw.focus();
        return false;
    }

    if(expPwText.test(userpw.value) == false){
        alert('비밀번호 형식을 확인하세요.')
        userpw.focus();
        return false;
    }

    if(userpw.value != userpw_re.value){
        alert('비밀번호 비밀번호 확인의 값이 서로 다릅니다.');
        userpw.focus();
        return false;
    }

    if(expHpText.test(hp.value) == false){
        alert('휴대폰 번호 형식을 확인하세요.');
        hp.focus();
        return false;
    }

    if(expEmailText.test(email.value) == false){
        alert('이메일 형식을 확인하세요.');
        email.focus();
        return false;
    }

    let isHobbycheck = false;

    for(let i=0; i<$("[name='hobby[]']").length; i++){
        if($("input:checkbox[name='hobby[]']").eq(i).is(":checked") == true){
            isHobbycheck = true;
            break;
        }
    }
    if(!isHobbycheck){
        alert("취미는 한개이상 체크하세요.");
        return false;
    }


    if(isSSN.value == 'false'){
        alert('주민등록번호 검증을 확인하세요.');
        ssn1.focus();
        return false;
    }
}

function moveFocus(){
    const ssn1 = document.getElementById('ssn1');
    if(ssn1.value.length >= 6){
        document.getElementById('ssn2').focus();
    }
}

function ssnCheck(){
    const ssn1 = document.getElementById('ssn1');
    const ssn2 = document.getElementById('ssn2');
    const isSSN = document.getElementById('isSSN');
    
    if(ssn1.value == "" || ssn2.value == ""){
        alert('주민등록번호를 입력하세요.');
        ssn1.focus();
        return false;
    }

    const ssn = ssn1.value + ssn2.value;
    const s1 = Number(ssn.substr(0, 1)) * 2;
    const s2 = Number(ssn.substr(1, 1)) * 3;
    const s3 = Number(ssn.substr(2, 1)) * 4;
    const s4 = Number(ssn.substr(3, 1)) * 5;
    const s5 = Number(ssn.substr(4, 1)) * 6;
    const s6 = Number(ssn.substr(5, 1)) * 7;
    const s7 = Number(ssn.substr(6, 1)) * 8;
    const s8 = Number(ssn.substr(7, 1)) * 9;
    const s9 = Number(ssn.substr(8, 1)) * 2;
    const s10 = Number(ssn.substr(9, 1)) * 3;
    const s11 = Number(ssn.substr(10, 1)) * 4;
    const s12 = Number(ssn.substr(11, 1)) * 5;
    const s13 = Number(ssn.substr(12, 1));

    let result = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12;
    result = result % 11;
    result = 11 - result;
    if(result >= 10) result = result % 10;

    if(result == s13){
        alert('유효한 주민등록번호입니다.');
        isSSN.value = 'true';
    }else{
        alert('유효하지 않은 주민등록번호입니다.');
    }
}