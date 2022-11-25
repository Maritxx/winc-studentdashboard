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
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: "top"
                }
            }
        },
        xaxis: {
            categories: props.labels
        },
        yaxis: {
            min: 0,
            max: 5,
            tickAmount: 5
        }
    };



    return (
        <Chart options={options} series={series} type="bar" height="100%" width="50%" />
    )
}

export default BarChart;