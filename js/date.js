;(function(datepicker){
	var datepicker = {};
	datepicker.getMonthData = function(year,month){
		var ret = [];
		//如果没有传年月，则传当年当月
		if(!year||!month){
			var today = new 	Date();
			year = today.getFullYear();
			month = today.getMonth()+1;
		}
		var firstDay = new Date(year,month-1,1);//当月第一天
		var firstWeekDay = firstDay.getDay();//当月第一天周几
		if(firstWeekDay === 0) firstWeekDay = 7;//周日
		
		year = firstDay.getFullYear();//不存在越界问题
		month = firstDay.getMonth()+1;//不存在越界问题
		
		var lastDayOfLastMonth = new Date(year,month-1,0);//上月最后一天
		var lastDateOfLastMonth = lastDayOfLastMonth.getDate();//上月最后一天日期
		var preMonthDayCount = firstWeekDay -1 ;//在日历第一行要显示上月的日期
		var lastDay = new Date(year,month,0);//当月最后一天
		var lastDate = lastDay.getDate();//当月最后一天日期
		for(var i=0;i<7*6;i++){
			var date = i + 1 - preMonthDayCount;//当月日期
			var showDate = date;//显示日历当前哪一天
			var thisMonth = month;//当月
			if(date <= 0){
				//上一月
				thisMonth = month +1;
				showDate = lastDateOfLastMonth+date;
			}else if(date>lastDate){
				//下一月
				thisMonth = month +1;
				showDate = showDate - lastDate;
			}
			if(thisMonth === 0)  thisMonth =12;
			if(thisMonth === 13) thisMonth = 1;
			ret.push({
				month: thisMonth,
				date:date,
				showDate:showDate
			});					
		}
		return {
			year:year,
			month:month,
			days: ret
		};
	};
	window.datepicker = datepicker;
})();
