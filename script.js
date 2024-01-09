function calculateGrade(percentage) {
  //your code here
	let markPercentage = Math.round(percentage);

	if(markPercentage >= 90)
	{
		return 'A';
	}
	else if(markPercentage >= 80 && markPercentage<= 89)
	{
		return 'B';
	}
	else if(markPercentage >= 70 && markPercentage<= 79)
	{
		return 'C';
	}
	else if(markPercentage >= 60 && markPercentage<= 69)
	{
		return 'D';
	}
	else
	{ 
		return 'F';
	}
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
