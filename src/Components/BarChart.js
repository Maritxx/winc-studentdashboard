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
            align: "center"
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
                fontSize: "10px"
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#FFFFFF']
        },
        xaxis: {
            categories: props.labels
        },
        yaxis: {
            min: 0,
            max: 5,
            tickAmount: 10,
            labels: {
                maxWidth: 60
            }
        },
       
    };



    return (
        <div style={{minHeight: "2000px"}}>
            <Chart options={options} series={series} type="bar" height="100%" width="100%" />
        </div>
    )
}

export default BarChart;