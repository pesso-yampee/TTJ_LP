/* eslint-disable */

import $ from 'jquery'
import 'chart.js/dist/Chart.min.js';
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  let $bodyAndHtml = $('body, html');

  // 「案件を見るボタン」：クリックイベント
  $('#toProject').on('click', function() {
    let headerHeight = $('#header').innerHeight(); //innerHeight() → paddingも含めた高さ

    $bodyAndHtml.animate({scrollTop: $('#project').offset().top - headerHeight}, 'swing');
  });

  // FAQ：アコーディオン
  for(let i=0; i<3; i++) {
    $(`#questionMenu${i+1}`).on('click', function() {
      $(this).next().stop().slideToggle();
      $(`#questionTitle${i+1}`).toggleClass('arrowTransform');
    });
  }

  // 円グラフ作成イベント
  var dataLabelPlugin = {
    afterDatasetsDraw: function (chart, easing) {
      // To only draw at the end of animation, check for easing === 1
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
        var dataSum = 0; // 505
        // datasets.data: [128, 120, 46, 82, 67, 46, 16]を全部足した数値
        dataset.data.forEach(function (element){
            dataSum += element; // 505
            // datasets.data: [128, 120, 46, 82, 67, 46, 16]を全部足した数値
        });

        var meta = chart.getDatasetMeta(i);
        if (!meta.hidden) {
          meta.data.forEach(function (element, index) {
              // Draw the text in black, with the specified font
              ctx.fillStyle = 'rgb(255, 255, 255)';

              var fontSize = 12;
              var fontStyle = 'normal';
              var fontFamily = 'Helvetica Neue';
              ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

              // Just naively convert to string for now
              var labelString = chart.data.labels[index];
              var dataString = (Math.round(dataset.data[index] / dataSum * 1000)/10).toString() + "%";

              // Make sure alignment settings are correct
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';

              var padding = 5;
              var position = element.tooltipPosition();
              ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
              ctx.fillText(dataString, position.x, position.y + (fontSize / 2) - padding);
          });
        }
      });
    }
  };

  // Chart
  var myChart1 = "myChart1";
  var myChart2 = "myChart2";
  var myChart3 = "myChart3";

  var chart1 = new Chart(myChart1, {
    type: 'pie',
    data: {
        labels: ["PHP", "JavaScript", "Ruby on Rails", "Go", "swift", "Python", "Java"],
        datasets: [{
            label: "Sample",
            backgroundColor: ["#3F51B5", "#F44336", "#FF9800", "#4CAF50", "#9C27B0", "#00BCD4", "#E91E63"],
            data: [128, 120, 46, 82, 67, 46, 16],
        }]
    },
    options: {
        title: {
            display: true
            // text: "開発言語"
        },
        legend:{
          display: false
        },
        maintainAspectRatio: false,
    },
    plugins: [dataLabelPlugin],
  });
  var chart2 = new Chart(myChart2, {
    type: 'pie',
    data: {
        labels: ["PHP", "JavaScript", "Ruby on Rails", "Go", "swift", "Python", "Java"],
        datasets: [{
            label: "Sample",
            backgroundColor: ["#3F51B5", "#F44336", "#FF9800", "#4CAF50", "#9C27B0", "#00BCD4", "#E91E63"],
            data: [128, 120, 46, 82, 67, 46, 16],
        }]
    },
    options: {
        title: {
            display: true
            // text: "開発言語"
        },
        legend:{
          display: false
        },
        maintainAspectRatio: false,
    },
    plugins: [dataLabelPlugin],
  });
  var chart3 = new Chart(myChart3, {
    type: 'pie',
    data: {
        labels: ["PHP", "JavaScript", "Ruby on Rails", "Go", "swift", "Python", "Java"],
        datasets: [{
            label: "Sample",
            backgroundColor: ["#3F51B5", "#F44336", "#FF9800", "#4CAF50", "#9C27B0", "#00BCD4", "#E91E63"],
            data: [128, 120, 46, 82, 67, 46, 16],
        }]
    },
    options: {
        title: {
            display: true
            // text: "開発言語"
        },
        legend:{
          display: false
        },
        maintainAspectRatio: false,
    },
    plugins: [dataLabelPlugin],
  });
})