import Chart from 'react-apexcharts';


function BarChart(props) {
    const series = [
        {
            name: "Average Grade for Difficulty",
            data: props.difficultyData

        },
        {
            name: "Average Grade for Enjoyment",
            data: props.enjoymentData
        }
    ];

    const options = {
        chart: {
            toolbar: {
                show: false
            }
        },
        theme: {
            palette: "palette6"
        },
        title: {
            text: "Average Rating of Students",
            align: "center",
            style: {
                fontSize: "20px"
            }
        },
        legend: {
            position: "top",
            fontSize: "12px",
            fontWeight: 700,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: "80%",
                dataLabels: {
                    position: "top",
                }
            }
        },
        dataLabels: {
            enabled: true,
            offsetX: -5,
            style: {
                fontSize: "12px"
            }
        },
        textAnchor: "middle",
        stroke: {
            show: true,
            width: 0.5,
            colors: ['#FFFFFF']
        },
        xaxis: {
            categories: props.labels,
            labels: {
                style: {
                    fontSize: "12px"
                }
            }
        },
        yaxis: {
            min: 0,
            max: 5,
            labels: {
                maxWidth: 70,
                align: "left",
                style: {
                    fontSize: "12px"
                }
            },
        },
       
    };



    return (
        <div style={{minHeight: "2000px", maxWidth: "1200px"}}>
            <Chart options={options} series={series} type="bar" height="100%" width="100%" />
        </div>
    )
}

export default BarChart;