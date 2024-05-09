// JavaScript Algoritma Çalışma proje 1 CamelCase projesi
// Bu projede bize verilen rastgele "-" ve "_" iel ayrılmış kelimeleri CamelCase düzenine göre yazan bir fonskiyon hazırlayacağız



function toCamelCase(str) {
    // camelCase adında string sonucumuzu dönecek bir değişken tanımlandı.
    let camelCase = "";
    /* nextStr adındaki değişkenimiz boolen bir değer alıp alfabe dışında bir harfe denk gelirse bir sonraki harfin büyük
    olup olmayacağını kontrol edecek*/
    let nextStr = false;
    // Fonksiyon eğer str parametresi boş bir değer ise boş bir string dönecek
    if (str == "") {
        return " ";
        
    } else {
        // Kelime içinde harf harf kontrol için bir döngü oluşturuldu.
        for (let i = 0; i < str.length; i++) {
            // Döngünün her iterasyonunda harfin alfabeden mi yoksa değil mi diye kontrol ediyoruz.
            if ((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z")) {
                // Alfabeden bir değer ise yukarıda tanımladğımız büyük harfe dönmesi gerekiyor mu kontrol ediyoruz
                if (nextStr) {
                    //eğer büyük olması gerekirse harfi büyütüp camelCase isimli değişkene ekliyoruz.
                    camelCase += str[i].toUpperCase();
                    nextStr = false;
                } else {
                    //değişmesine gerek yoksa aynen camelCase değişkenine ekliyoruz
                    camelCase += str[i];
                }
            } else {
                //eğer alfabeden bir harf değilse kendisinden sonraki harfi büyük yapabilmek için nextStr değerini true yapıyoruz.
                nextStr = true;

            }


        }
    }
    return camelCase;

}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("a_Cat_Was_evil"));
console.log(toCamelCase(""));