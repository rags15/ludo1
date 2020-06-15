var end=28;
var k1=0,k2=0,k3=0,k4=0;
var a=0,b=0,c=0,d=0;

var roll;
var x=document.getElementById("yo");
var y=document.getElementById("hi");
var z=document.getElementById("co");
var w=document.getElementById("ci");
var i=0;
x.disabled=true;
y.disabled=true;
var ind1=0,ind2=0;
var brkA=100,brkC=100;



function won()
{
if(i==1)
alert("Red Won");
else
if(i==0)
alert
("Blue Won");
k1=0,k2=0,k3=0,k4=0;
a=0,b=0,c=0,d=0;
ind1=0,ind2=0;
brkA=100,brkC=100;
document.getElementById("contB").appendChild(z);
document.getElementById("contB").appendChild(w);
document.getElementById("contR").appendChild(x);
document.getElementById("contR").appendChild(y);
x.disabled=true;
y.disabled=true;
z.disabled=true;
w.disabled=true;
document.getElementById("turn").innerHTML="";
document.getElementById("disp").innerHTML="";
}

function func(roll)
{
	document.getElementById("disp").innerHTML=roll;
	if(i==0)
	{
	document.getElementById("turn").innerHTML="RED'S TURN";
	w.disabled=true;
	z.disabled=true;

	i=1;
	function next()
			{
				k1+=roll;
				if(k1<=end)
				{
					
					
					if(k1==ind1&&k1!=ind2)
					{
						x.remove();
						z.remove();
						c=0;
						k3=15;
						ind1=15;
						document.getElementById(k1).appendChild(x);
						document.getElementById("contB").appendChild(z);
					
					}
					else 
					if(k1==ind2&&k1!=ind1)
					{
						x.remove();
						w.remove();
						d=0;
						k4=15;
						ind2=15;
						document.getElementById(k1).appendChild(x);
						document.getElementById("contB").appendChild(w);
					} 
					else
					if(k1<=brkC)
					{
						x.remove();
						document.getElementById(k1).appendChild(x);
					}
					else
					if(k1>brkC)
					{
						if(k1-roll>=brkC)
						{
							x.remove();
							document.getElementById(k1).appendChild(x);
						}
						else
						{
							k1-=roll;
							alert("you cannot break a pair");
						}
					}
					if(k1==28)
					{
						x.remove();
						document.getElementById("endR").appendChild(x);
						a=-1;
					
						if(a==b)
							won();
					}
				}
				else
				{
					k1-=roll;
					alert("try again in next chance");
				}
			}

	function next2()
			{
				k2+=roll;
				if(k2<=end)
				{
					

					if(k2==ind1&&k2!=ind2)
					{
						y.remove();
						z.remove();
						c=0;
						k3=15;
						ind1=15;
						document.getElementById(k2).appendChild(y);
						document.getElementById("contB").appendChild(z);
					
					}
					else 
					if(k2==ind2&&k2!=ind1)
					{
				
						y.remove();
						w.remove();
						d=0;
						k4=15;
						ind2=15;
						document.getElementById(k2).appendChild(y);
						document.getElementById("contB").appendChild(w);
					} 
					else
					if(k2<=brkC)
					{
						y.remove();
						document.getElementById(k2).appendChild(y);
					}
					else
					if(k2>brkC)
					{
						if(k2-roll>=brkC)
						{
							y.remove();
							document.getElementById(k2).appendChild(y);
						}
						else
						{
							k2-=roll;
							alert("you cannot break a pair");
						}
					}
					if(k2==28)
					{
						y.remove();
						document.getElementById("endR").appendChild(y);
						b=-1;
						if(a==b)
							won();
					}
				}
				else
				{
					k2-=roll;
					alert("try again in next chance");
				}
			}
	if(a==0&&b==0)
	{
		if(roll==6)
		{

		x.disabled = false;
		y.disabled = false;
		x.onclick=function()
			{
			a=1;
			k1=1;
			
			y.disabled=true;
			x.disabled=true; 

			
			if(k1==ind1&&k1!=ind2)
				{
					x.remove();
					z.remove();
					c=0;
					k3=15;
					ind1=15;
					document.getElementById(1).appendChild(x);
					document.getElementById("contB").appendChild(z);
					
				}
			else 
			if(k1==ind2&&k1!=ind1)
				{
					x.remove();
					w.remove();
					d=0;
					k4=15;
					ind2=15;
					document.getElementById(1).appendChild(x);
					document.getElementById("contB").appendChild(w);
				} 
			else
			{
				x.remove();
				document.getElementById(1).appendChild(x);}
		
			
			};
		y.onclick=function()
			{
			b=1;
			k2=1;
		
			x.disabled=true; 
			y.disabled=true;
			if(k2==ind1&&k2!=ind2)
				{
					y.remove();
					z.remove();
					c=0;
					k3=15;
					ind1=15;
					document.getElementById(1).appendChild(y);
					document.getElementById("contB").appendChild(z);
					
				}
			else 
			if(k2==ind2&&k2!=ind1)
				{
					y.remove();
					w.remove();
					d=0;
					k4=15;
					ind2=15;
					document.getElementById(1).appendChild(y);
					document.getElementById("contB").appendChild(w);
				} 
			else
			{
					y.remove();
				document.getElementById(1).appendChild(y);}
			};
		}

		 
	}

	

	else
	if((a==1&&b==0)||(a==1&&b==-1))
	{

		
		if(roll!=6)
		{
			
		next();	
			
		}

		if(roll==6)
		{
			if(b==0)
			{
			y.disabled=false;
			x.disabled=false;
			x.onclick=function(){ next(); y.disabled=true;x.disabled=true;};
		        y.onclick=function()
					{
						
						
						k2=1;
						b=1;
						if(k1==k2)
						brkA=1;
						if(k2==ind1&&k2!=ind2)
						{
							y.remove();
							z.remove();
							c=0;
							k3=15;
							ind1=15;
							document.getElementById(k2).appendChild(y);
							document.getElementById("contB").appendChild(z);
					
						}
						else 
						if(k2==ind2&&k2!=ind1)
						{
						y.remove();
						w.remove();
						d=0;
                                                k4=15;
						ind2=15;
						document.getElementById(k2).appendChild(y);
						document.getElementById("contB").appendChild(w);
						} 
						else
						{
						y.remove();
						document.getElementById(k2).appendChild(y); }
						

						y.disabled=true;
						x.disabled=true;
					};
			}

			if(b==-1)
			{
				next();
			}
			
				
			
		}
	}
	
	else
	if((b==1&&a==0)||(b==1&&a==-1))
	{

		
		if(roll!=6)
		{
			
		next2();	
			
		}

		if(roll==6)
		{
			if(a==0)
			{
			x.disabled=false;
			y.disabled=false;
			y.onclick=function(){ next2(); x.disabled=true; y.disabled=true;};
		        x.onclick=function()
					{
						a=1;
						k1=1;
						
					        if(k1==ind1&&k1!=ind2)
						{
						x.remove();
						z.remove();
						c=0;
						k3=15;
						ind1=15;
						document.getElementById(k1).appendChild(x);
						document.getElementById("contB").appendChild(z);
					
						}
						else 
						if(k1==ind2&&k1!=ind1)
						{
						x.remove();
						w.remove();
						d=0;
						k4=15;
						ind2=15;
						document.getElementById(k1).appendChild(x);
						document.getElementById("contB").appendChild(w);
						} 
						else		
						{x.remove();
							document.getElementById(k1).appendChild(x);}             
			 
						y.disabled=true;
						x.disabled=true;
					};
			}
			if(a==-1)
			{
				next2();
			}
			
				
			
		}
	}
	
	else
	if(a==1&&b==1)
	{
		if(k1==k2)
		brkA=k1;
		else
		brkA=100;
		x.disabled=false;
			y.disabled=false;
		x.onclick=function()
			{ 
				next();
				if(k1==k2)
					brkA=k1;
				else
					brkA=100;
			 	y.disabled=true;
				x.disabled=true;
			};		
		y.onclick=function()
			{ 
			next2(); 
			if(k1==k2)
				brkA=k1;
			else
				brkA=100;
			y.disabled=true;
			x.disabled=true;
			};
		
	
	}
	
	else
	if(a==0&&b==-1)
	{
	if(roll==6)
	{
		a=1;
		k1=1;
	
		if(k1==ind1&&k1!=ind2)
				{
					x.remove();
					z.remove();
					c=0;
					k3=15;
					ind1=15;
					document.getElementById(k1).appendChild(x);
					document.getElementById("contB").appendChild(z);
					
				}
			else 
			if(k1==ind2&&k1!=ind1)
				{
					x.remove();
					w.remove();
					d=0;
					k4=15;
					ind2=15;
					document.getElementById(k1).appendChild(x);
					document.getElementById("contB").appendChild(w);
				} 
			else
			{	x.remove();
				document.getElementById(k1).appendChild(x);}
		 y.disabled=true;x.disabled=true;
	}
	
	}

	else
	if(a==-1&&b==0)
	{
	if(roll==6)
	{
		b=1;
		k2=1;
		
		if(k2==ind1&&k2!=ind2)
				{
					y.remove();
					z.remove();
					c=0;
					k3=15;
					ind1=15;
					document.getElementById(k2).appendChild(y);
					document.getElementById("contB").appendChild(z);
					
				}
			else 
			if(k2==ind2&&k2!=ind1)
				{
					y.remove();
					w.remove();
					d=0;
					k4=15;
					ind2=15;
					document.getElementById(k2).appendChild(y);
					document.getElementById("contB").appendChild(w);
				} 
			else
			{	y.remove();
				document.getElementById(k2).appendChild(y);}
		 y.disabled=true;x.disabled=true;
	}
	
	}
	
	


	
}


else if(i==1)
	{
	x.disabled=true;
	y.disabled=true;
	document.getElementById("turn").innerHTML="BLUE'S TURN";
	i=0;
	function next3()
			{	
				k3+=roll;
				
				if(k3<=28)
				{
				
			
					ind1=k3;
					
					if(ind1==k1&&ind1!=k2)
					{
						z.remove();
						x.remove();
						a=0;
						k1=1;
						document.getElementById(ind1).appendChild(z);
						document.getElementById("contR").appendChild(x);
					
					}
					else 
					if(ind1==k2&&ind1!=k1)
					{
						z.remove();				
						y.remove();
						b=0;
						k2=1;
						document.getElementById(ind1).appendChild(z);
						document.getElementById("contR").appendChild(y);
					} 
					else
					if(ind1<=brkA)
					{
						z.remove();
						document.getElementById(ind1).appendChild(z);
					}
					else
					if(ind1>brkA)
					{
						if(ind1-roll>=brkA)
						{
							z.remove();
							document.getElementById(ind1).appendChild(z);
						}
						else
						{
							k3-=roll;
							alert("you cannot break a pair");
						}
					}
					
				
				}

				else
				if(k3>28&&k3<=42)
				{
					ind1=k3-28;
					
					if(ind1==k1&&ind1!=k2)
					{
						z.remove();
						x.remove();
						a=0;
						k1=1;
						document.getElementById(ind1).appendChild(z);
						document.getElementById("contR").appendChild(x);
					
					}
					else 
					if(ind1==k2&&ind1!=k1)
					{
						z.remove();
						y.remove();
						b=0;
						k2=1;
						document.getElementById(ind1).appendChild(z);
						document.getElementById("contR").appendChild(y);
					} 
					else
					if(ind1<=brkA)
					{
						z.remove();
						document.getElementById(ind1).appendChild(z);
					}
					else
					if(ind1>brkA)
					{
						if(ind1-roll>=brkA)
						{
							z.remove();
							document.getElementById(ind1).appendChild(z);
						}
						else
						{
							k3-=roll;
							alert("you cannot break a pair");
						}
					}
						
					if(k3==42)
					{
					z.remove();
					document.getElementById("endB").appendChild(z);
					c=-1;
					if(c==d)
					won();
					}
					
				}
				else
				if(k3>42)
				{
					k3-=roll;
					alert("try again in next chance");
				}
				
			}

	function next4()
			{
				k4+=roll;
				if(k4<=28)
				{
					ind2=k4;
					
					if(ind2==k1&&ind2!=k2)
					{
						w.remove();
						x.remove();
						a=0;
						k1=1;
						document.getElementById(ind2).appendChild(w);
						document.getElementById("contR").appendChild(x);
					
					}
					else 
					if(ind2==k2&&ind2!=k1)
					{
								
						w.remove();
						y.remove();
						b=0;
						k2=1;
						document.getElementById(ind2).appendChild(w);
						document.getElementById("contR").appendChild(y);
					} 
					else
					if(ind2<=brkA)
					{
						w.remove();
						document.getElementById(ind2).appendChild(w);
					}
					else
					if(ind2>brkA)
					{
						if(ind2-roll>=brkA)
						{
							w.remove();
							document.getElementById(ind2).appendChild(w);
						}
						else
						{
							k4-=roll;
							alert("you cannot break a pair");
						}
					}
					
				}
				else
				if(k4>28&&k4<=42)
				{
					ind2=k4-28;
					
					if(ind2==k1&&ind2!=k2)
					{
						w.remove();
						x.remove();
						a=0;
						k1=1;
						document.getElementById(ind2).appendChild(w);
						document.getElementById("contR").appendChild(x);
					
					}
					else 
					if(ind2==k2&&ind2!=k1)
					{
						w.remove();
						y.remove();
						b=0;
						k2=1;
						document.getElementById(ind2).appendChild(w);
						document.getElementById("contR").appendChild(y);
					} 
					else
					if(ind2<=brkA)
					{
					w.remove();
					document.getElementById(ind2).appendChild(w);
					}
					else
					if(ind2>brkA)
					{
						if(ind2-roll>=brkA)
						{
							w.remove();
							document.getElementById(ind2).appendChild(w);
						}
						else
						{
							k4-=roll;
							alert("you cannot break a pair");
						}
					}
					if(k4==42)
					{
						w.remove();
						document.getElementById("endB").appendChild(w);
						d=-1;
						if(c==d)
						won();
					}
				}
				else
				if(k4>42)
				{
					k4-=roll;
					alert("try again in next chance");
				}
			}
	if(c==0&&d==0)
	{
		if(roll==6)
		{
		z.disabled = false;
		w.disabled = false;
		
	      z.onclick=function()
		{
			c=1;
			k3=15;
			ind1=15;
			z.remove();
			w.disabled=true; 
			z.disabled=true;
				if(ind1==k1&&ind1!=k2)
					{
						x.remove();
						a=0;
						k1=1;
						document.getElementById(ind1).appendChild(z);
						document.getElementById("contR").appendChild(x);
					
					}
					else 
					if(ind1==k2&&ind1!=k1)
					{
					
						y.remove();
						b=0;
						k2=1;
						document.getElementById(ind1).appendChild(z);
						document.getElementById("contR").appendChild(y);
					} 
					else
					document.getElementById(ind1).appendChild(z);
		};
		w.onclick=function()
			{
				d=1;
				k4=15;
				ind2=15;
				w.remove();
				z.disabled=true;
				w.disabled=true;
					if(ind2==k1&&ind2!=k2)
					{
						x.remove();
						a=0;
						k1=1;
						document.getElementById(ind2).appendChild(w);
						document.getElementById("contR").appendChild(x);
					
					}
					else 
					if(ind2==k2&&ind2!=k1)
					{
					
						y.remove();
						b=0;
						k2=1;
						document.getElementById(ind2).appendChild(w);
						document.getElementById("contR").appendChild(y);
					} 
					else
					document.getElementById(ind2).appendChild(w);
			};
		}

		 
	}

	

	else
	if((c==1&&d==0)||(c==1&&d==-1))
	{

		
		if(roll!=6)
		{
			
		next3();	
			
		}

		if(roll==6)
		{
			if(d==0)
			{
			w.disabled=false;
			z.disabled=false;
			z.onclick=function(){ next3(); w.disabled=true;z.disabled=true;};
		        w.onclick=function()
				{
				w.remove();
				d=1;
				k4=15;
				ind2=15;
				if(k3==k4)
				brkC=k3;
					if(ind2==k1&&ind2!=k2)
					{
						x.remove();
						a=0;
						k1=1;
						document.getElementById(ind2).appendChild(w);
						document.getElementById("contR").appendChild(x);
					
					}
					else 
					if(ind2==k2&&ind2!=k1)
					{
					
						y.remove();
						b=0;
						k2=1;
						document.getElementById(ind2).appendChild(w);
						document.getElementById("contR").appendChild(y);
					} 
					else
					document.getElementById(ind2).appendChild(w);
				w.disabled=true;
				z.disabled=true;
				};
			}

			if(d==-1)
			{
				next3();
			}
			
				
			
		}
	}
	
	else
	if((d==1&&c==0)||(d==1&&c==-1))
	{

		
		if(roll!=6)
		{
			
		next4();	
			
		}

		if(roll==6)
		{
			if(c==0)
			{
			z.disabled=false;
			w.disabled=false;
			w.onclick=function(){ next4();z.disabled=true;w.disabled=true;};
		        z.onclick=function()
				{
					c=1;
					k3=15;
					ind1=15;
					if(k3==k4)
					brkC=k3;
					z.remove();
					if(ind1==k1&&ind1!=k2)
					{
						x.remove();
						a=0;
						k1=1;
						document.getElementById(ind1).appendChild(z);
						document.getElementById("contR").appendChild(x);
					
					}
					else 
					if(ind1==k2&&ind1!=k1)
					{
					
						y.remove();
						b=0;
						k2=1;
						document.getElementById(ind1).appendChild(z);
						document.getElementById("contR").appendChild(y);
					} 
					else
					document.getElementById(ind1).appendChild(z);
					w.disabled=true;
					z.disabled=true;};
			}
			if(c==-1)
			{
				next4();
			}
			
				
			
		}
	}

	if(c==1&&d==1)
	{
		if(ind1==ind2)
		brkC=ind1;
		else
		brkC=100;
		z.disabled=false;
		w.disabled=false;
		z.onclick=function()
			{ 
				next3();
				if(ind1==ind2)
					brkC=ind1;
				else
					brkC=100;
				w.disabled=true;
				z.disabled=true;
			};		
		w.onclick=function()
			{ 
				next4();
				if(ind1==ind2)
					brkC=ind1;
				else
					brkC=100;
				w.disabled=true;
				z.disabled=true;
			};
	
	}

	if(c==0&&d==-1)
	{
	if(roll==6)
	{
		c=1;
		k3=15;
		ind1=15;
		z.remove();
					if(ind1==k1&&ind1!=k2)
					{
						x.remove();
						a=0;
						k1=1;
						document.getElementById(ind1).appendChild(z);
						document.getElementById("contR").appendChild(x);
					
					}
					else 
					if(ind1==k2&&ind1!=k1)
					{
					
						y.remove();
						b=0;
						k2=1;
						document.getElementById(ind1).appendChild(z);
						document.getElementById("contR").appendChild(y);
					} 
					else
					document.getElementById(ind1).appendChild(z);
		w.disabled=true;z.disabled=true;
	}
	
	}

	if(c==-1&&d==0)
	{
	if(roll==6)
	{
		d=1;
		k4=15;
		ind2=15;
		w.remove();
			if(ind2==k1&&ind2!=k2)
					{
						x.remove();
						a=0;
						k1=1;
						document.getElementById(ind2).appendChild(w);
						document.getElementById("contR").appendChild(x);
					
					}
					else 
					if(ind2==k2&&ind2!=k1)
					{
					
						y.remove();
						b=0;
						k2=1;
						document.getElementById(ind2).appendChild(w);
						document.getElementById("contR").appendChild(y);
					} 
					else
					document.getElementById(ind2).appendChild(w);
		w.disabled=true;z.disabled=true;
	}
	
	}

	if(c==-1&&d==-1)
	{
		alert("you won");
	
	}
}
}


document.getElementById("roll").onclick=function(){
roll=Math.floor(Math.random() * 6) + 1;
document.getElementById("disp").innerHTML=roll;
func(roll);}




