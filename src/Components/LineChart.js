import Chart from 'react-apexcharts';

function LineChart(props) {
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
            },
            zoom: {
                enabled: false
            }
        },
        legend: {
            position: "top",
            fontSize: "12px",
            fontWeight: 700,
        },
        stroke: {
            curve: "straight"
        },
        xaxis: {
            categories: props.labels,
            labels: {
                rotate: -50,
                hideOverlappingLabels: true,
                trim: true,
                maxHeight: 60
            }
        },
        yaxis: {
            min: 0,
            max: 5,
            tickAmount: 5,
            title: {
                text: "Average ratings given",
                rotate: -90
            }
        }
    };

    return (
        <div style={{minHeight: "700px", maxWidth: "1200px"}}>
            <Chart options={options} series={series} type="line" width="100%" height="100%" />
        </div>
    )
}

export default LineChart;