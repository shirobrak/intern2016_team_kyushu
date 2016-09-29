var GINZA = ["渋谷", "表参道", "外苑前", "青山一丁目", "赤坂見附", "溜池山王", "虎ノ門", "新橋", "銀座", "京橋", "日本橋", "三越前", "神田", "末広町", "上野広小路", "上野", "稲荷町", "田原町", "浅草"];//28001
var MARUNOUCHI = ["荻窪", "南阿佐ヶ谷", "新高円寺", "東高円寺", "新中野", "中野坂上", "西新宿", "新宿", "新宿三丁目", "新宿御苑前", "四谷三丁目", "四ツ谷", "赤坂見附", "国会議事堂前", "霞ケ関", "銀座", "東京", "大手町", "淡路町", "御茶ノ水", "本郷三丁目", "後楽園", "茗荷谷", "新大塚", "池袋", "方南町", "中野富士見町", "中野新橋"];//28002
var HIBIYA = ["中目黒", "恵比寿", "広尾", "六本木", "神谷町", "霞ケ関", "日比谷", "銀座", "東銀座", "築地", "八丁堀", "茅場町", "人形町", "小伝馬町", "秋葉原", "仲御徒町", "上野", "入谷", "三ノ輪", "南千住", "北千住"];//28003
var TOUZAI = ["中野", "落合", "高田馬場", "早稲田", "神楽坂", "飯田橋", "九段下", "竹橋", "大手町", "日本橋", "茅場町", "門前仲町", "木場", "東陽町", "南砂町", "西葛西", "葛西", "浦安", "南行徳", "行徳", "妙典", "原木中山", "西船橋"];//28004
var CHIYODA = ["代々木上原", "代々木公園", "明治神宮前", "原宿", "表参道", "乃木坂", "赤坂", "国会議事堂前", "霞ケ関", "日比谷", "二重橋前", "大手町", "新御茶ノ水", "湯島", "根津", "千駄木", "西日暮里", "町屋", "北千住", "綾瀬", "北綾瀬"];//28005
var YURAKU = ["和光市", "地下鉄成増", "地下鉄赤塚", "平和台", "氷川台", "小竹向原", "千川", "要町", "池袋", "東池袋", "護国寺", "江戸川橋", "飯田橋", "市ケ谷", "麹町", "永田町", "桜田門", "有楽町", "銀座一丁目", "新富町", "月島", "豊洲", "辰巳", "新木場"];//28006//28007
var HANZOU = ["渋谷", "表参道", "青山一丁目", "永田町", "半蔵門", "九段下", "神保町", "大手町", "三越前", "水天宮前", "清澄白河", "住吉", "錦糸町", "押上", "スカイツリー前"];//28008
var NANBOKU = ["目黒", "白金台", "白金高輪", "麻布十番", "六本木一丁目", "留池山王", "永田町", "四ツ谷", "市ケ谷", "飯田橋", "後楽園", "東大前", "本駒込", "西ケ原", "王子", "王子神谷", "志茂", "赤羽岩淵"]//28009
var HUKUTOSHIN = ["和光市", "地下鉄成増", "地下鉄赤塚", "平和台", "氷川台", "小竹向原", "千川", "要町", "池袋", "雑司が谷", "西早稲田", "東新宿", "新宿三丁目", "北参道", "明治神宮前", "原宿", "渋谷"];//28010
var T_ASAKUSA = ["西馬込","馬込","中延","戸越","五反田","高輪台","泉岳寺","三田","大門","新橋","東銀座","日本橋","人形町","東日本橋","浅草橋","蔵前","浅草","本所吾妻橋","押上"];
var T_MITA = ["目黒","白金台","白金高輪","三田","芝公園","御成門","内幸町","日比谷","大手町","神保町","水道橋","春日","白山","千石","巣鴨","西巣鴨","新板橋","板橋区役所前","板橋本町","本蓮沼","志村坂上","志村三丁目","蓮根","西台","高島平","新高島平","西高島平"];
var T_SHINJUKU = ["新宿","新宿三丁目","曙橋","市ヶ谷","九段下","神保町","小川町","岩本町","馬喰横山","浜町","森下","菊川","住吉","西大島","大島","東大島","船堀","一之江","瑞江","篠崎","本八幡"];
var T_OEDO = ["都庁前","新宿西口","東新宿","若松河田","牛込柳町","牛込神楽坂","飯田橋","春日","本郷三丁目","上野御徒町","新御徒町","蔵前","両国","森下","清澄白河","門前仲町","月島","勝どき","築地市場","汐留","大門","赤羽橋","麻布十番","六本木","青山一丁目","国立競技場","代々木","新宿","都庁前","西新宿五丁目","中野坂上","東中野","中井","落合南長崎","新江古田","練馬","豊島園","練馬春日町","光が丘"];
var JR_YAMANOTE = ["大崎","五反田","目黒","恵比寿","渋谷","原宿","代々木","新宿","新大久保","高田馬場","目白","池袋","大塚","巣鴨","駒込","田端","西日暮里","日暮里","鶯谷","上野","御徒町","秋葉原","神田","東京","有楽町","新橋","浜松町","田町","品川"];//11302
var JR_TYUOH = ["東京", "神田", "御茶ノ水", "水道橋", "飯田橋", "市ケ谷", "四ツ谷", "信濃町", "千駄ケ谷", "代々木", "新宿", "大久保", "東中野", "中野", "高円寺", "阿佐ヶ谷", "荻窪", "西荻窪", "吉祥寺", "三鷹", "武蔵境", "東小金井", "武蔵小金井", "国分寺", "西国分寺", "国立", "立川", "日野", "豊田", "八王子"];//101

count_rosen_su = 0;
//search_count = 0;

function set2fig(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function showClock() {
   var nowTime = new Date();
   var nowHour = set2fig( nowTime.getHours() );
   var nowMin = set2fig( nowTime.getMinutes() );
   var nowSec = set2fig( nowTime.getSeconds() );
   var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
   document.getElementById("RealtimeClockArea").innerHTML = msg;
}
//setInterval('showClock()',1000);

function showSearch_num() {
    if(search_count > 0)
    {
        var search_result = "検索「" + search_count + "」件";
    }
    else
    {
        var search_result = "検索して下さい。";
    }
   
   document.getElementById("search_num").innerHTML = search_result;
}
setInterval('showSearch_num()',1000);