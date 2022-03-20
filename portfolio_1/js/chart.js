$(document).ready(function(){
	
	//차트1

	var context_1=document.getElementById("myChart_1").getContext('2d');

	var myChart_1 = new Chart(context_1, {
		type:"bar",//차트의 형태
		data:{//차트에 들어갈 데이터
			labels:[
			//x축
			"★★★★★", "★★★★", "★★★", "★★", "★"				
			],
			datasets:[
				{//데이터
					label:"연령대별 평균 점수는?",//차트 제목
					fill:false,//line 형태일 때, 선 안쪽을 채우는지 안 채우는지
					data:[
						83, 17, 0, 0, 0//x축 label에 대응되는 데이터 값 
					],
					backgroundColor:[
						'#669acc',
						'#ff6632',
						'#65cb99',
						'#0099cb',	
						'#0099cb'
					],
					borderColor:[
						'#669acc',
						'#ff6632',
						'#65cb99',
						'#0099cb',	
						'#0099cb'
					],
					borderWidth:1
				}
			]
		},
		options:{
			indexAxis:'y',
			scales:{
				yAxes:[
					{
						ticks:{
							beginAtZero:true
						}
					}
				]
			}
		}
	});

	//차트2

	var context_2=document.getElementById("myChart_2").getContext('2d');

	var myChart_2 = new Chart(context_2, {
		type:"bar",//차트의 형태
		data:{//차트에 들어갈 데이터
			labels:[
			//x축
			"10대", "20대", "30대", "40대", "50대"				
			],
			datasets:[
				{//데이터
					label:"연령대별 평균 점수는?",//차트 제목
					fill:false,//line 형태일 때, 선 안쪽을 채우는지 안 채우는지
					data:[
						0, 10.0, 9.0, 9.0, 10.0//x축 label에 대응되는 데이터 값 
					],
					backgroundColor:[
						'#669acc',
						'#ff6632',
						'#65cb99',
						'#0099cb',	
						'#0099cb'
					],
					borderColor:[
						'#669acc',
						'#ff6632',
						'#65cb99',
						'#0099cb',	
						'#0099cb'
					],
					borderWidth:1
				}
			]
		},
		options:{
			scales:{
				yAxes:[
					{
						ticks:{
							beginAtZero:true
						}
					}
				]
			}
		}
	});
});