import {
    Col,
    Row,
    Button,
    Form,
    Input,
    DatePicker,
    Modal,
    Table,
    Space,
    Avatar,
    Select,
    Checkbox,
    InputNumber
} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import * as util from '../../util'
import * as d3 from 'd3';


const WIDTH = 1000;
const HEIGHT = 1200;
const R = 10;

export class KGManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.print();
    }

    print = () => {
        //初始化数据
        const nodeData = [
            // root
            {id: 1, name: '阅粒'},
            // level1
            {id: 2, name: '规章制度'},
            {id: 3, name: '财务管理'},
            {id: 4, name: '人力资源'},
            {id: 5, name: '行政福利'},
            {id: 6, name: '法律事务'},
            {id: 7, name: '市场信息'},
            {id: 8, name: '产品设计'},
            {id: 9, name: '技术研发'},
            // level2
            {id: 10, name: '行政办公制度'},
            {id: 11, name: '公章使用'},
            {id: 12, name: '通行报销'},
            {id: 13, name: '差旅费'},
            {id: 14, name: '工资奖金发放'},
            {id: 15, name: '项目及特殊奖励制度'},
            {id: 16, name: '餐补助'},
            {id: 17, name: '其他补助津贴'},
            {id: 18, name: '招聘'},
            {id: 19, name: '聘用合同'},
            {id: 20, name: '面试及人才筛选'},
            {id: 21, name: '面试指南'},
            {id: 22, name: '笔试考题'},
            {id: 23, name: '早餐'},
            {id: 24, name: '下午茶'},
            {id: 25, name: '餐补'},
            {id: 26, name: '其他节假日津贴'},
            {id: 27, name: '法务工作制度'},
            {id: 28, name: '公司法务事物'},
            {id: 29, name: '合同'},
            {id: 30, name: '审计'},
            {id: 31, name: '公关传播'},
            {id: 32, name: '舆情口碑和市场反馈'},
            {id: 33, name: '竞品、供应链'},
            {id: 34, name: '政策和宏观经济分析'},
            {id: 35, name: '定制主题数据分析'},
            {id: 36, name: '阅粒知识计算引擎'},
            {id: 37, name: '搜藏'},
            {id: 38, name: '知识管理系统'},
            {id: 39, name: '数据智能化RPA流程引擎'},
            {id: 40, name: '算法'},
            {id: 41, name: '后端工程'},
            {id: 42, name: '产品工程'},
            {id: 43, name: '产品项目'},
            {id: 44, name: '数据服务'},
            // level 3
            {id: 45, name: '考勤'},
            {id: 46, name: '办公设备'},
            {id: 47, name: '办公用品'},
            {id: 48, name: '候选人数据库'},
        ];
        let nodes = [];
        for (let i = 0; i < nodeData.length; i++) {
            nodes.push({
                id: (nodeData[i] && nodeData[i].id) || '', // 节点id
                name: (nodeData[i] && nodeData[i].name) || '', // 节点名称
            });
        }
        const relData = [
            {id: 1, source: 1, target: 2, tag: ''},
            {id: 2, source: 1, target: 3, tag: ''},
            {id: 3, source: 1, target: 4, tag: ''},
            {id: 4, source: 1, target: 5, tag: ''},
            {id: 5, source: 1, target: 6, tag: ''},
            {id: 6, source: 1, target: 7, tag: ''},
            {id: 7, source: 1, target: 8, tag: ''},
            {id: 8, source: 1, target: 9, tag: ''},


            {id: 9, source: 2, target: 10, tag: ''},
            {id: 10, source: 2, target: 11, tag: ''},
            {id: 11, source: 10, target: 45, tag: ''},
            {id: 12, source: 10, target: 46, tag: ''},
            {id: 13, source: 10, target: 47, tag: ''},
            {id: 14, source: 3, target: 12, tag: ''},
            {id: 15, source: 3, target: 13, tag: ''},
            {id: 16, source: 3, target: 14, tag: ''},
            {id: 17, source: 3, target: 15, tag: ''},
            {id: 18, source: 3, target: 16, tag: ''},
            {id: 19, source: 3, target: 17, tag: ''},
            {id: 20, source: 4, target: 18, tag: ''},
            {id: 21, source: 4, target: 19, tag: ''},
            {id: 22, source: 4, target: 20, tag: ''},
            {id: 23, source: 4, target: 21, tag: ''},
            {id: 24, source: 4, target: 22, tag: ''},
            {id: 25, source: 20, target: 48, tag: ''},
            {id: 26, source: 5, target: 23, tag: ''},
            {id: 27, source: 5, target: 24, tag: ''},
            {id: 28, source: 5, target: 25, tag: ''},
            {id: 29, source: 5, target: 26, tag: ''},
            {id: 30, source: 6, target: 27, tag: ''},
            {id: 31, source: 6, target: 28, tag: ''},
            {id: 32, source: 6, target: 29, tag: ''},
            {id: 33, source: 6, target: 30, tag: ''},
            {id: 34, source: 7, target: 31, tag: ''},
            {id: 35, source: 7, target: 32, tag: ''},
            {id: 36, source: 7, target: 33, tag: ''},
            {id: 37, source: 7, target: 34, tag: ''},
            {id: 38, source: 7, target: 35, tag: ''},
            {id: 39, source: 8, target: 36, tag: ''},
            {id: 40, source: 8, target: 37, tag: ''},
            {id: 41, source: 8, target: 38, tag: ''},
            {id: 42, source: 8, target: 39, tag: ''},
            {id: 43, source: 9, target: 40, tag: ''},
            {id: 44, source: 9, target: 41, tag: ''},
            {id: 45, source: 9, target: 42, tag: ''},
            {id: 46, source: 9, target: 43, tag: ''},
            {id: 47, source: 9, target: 44, tag: ''},
        ];

        let edges = [];
        for (let i = 0; i < relData.length; i++) {
            edges.push({
                id: (relData[i] && (relData[i].id)) || '', // 连线id
                source: relData[i].source, // 开始节点
                target: relData[i].target, // 结束节点
                tag: (relData[i].tag) || '', // 连线名称
            });
        }
        this.setState({
            nodes: nodes,
            edges: edges
        })
        this.forceChart(nodes, edges)
    }

    forceChart = (nodes, edges) => {
        this.refs['theChart'].innerHTML = '';

        //定义力模型
        const simulation = d3.forceSimulation(nodes) // 指定被引用的nodes数组
            .force('link', d3.forceLink(edges).id(d => d.id).distance(80))
            .force('collision', d3.forceCollide(1).strength(0.1))
            .force('center', d3.forceCenter(WIDTH / 2, HEIGHT / 2.5))
            .force('charge', d3.forceManyBody().strength(-1000).distanceMax(300));

        //缩放
        function onZoomStart(d) {
            // console.log('start zoom');
        }

        function zooming(d) {
            // 缩放和拖拽整个g
            // console.log('zoom ing', d3.event.transform, d3.zoomTransform(this));
            // g.attr('transform', d3.event.transform); // 获取g的缩放系数和平移的坐标值。
        }

        function onZoomEnd() {
            // console.log('zoom end');
        }

        const zoom = d3.zoom()
            // .translateExtent([[0, 0], [WIDTH, HEIGHT]]) // 设置或获取平移区间, 默认为[[-∞, -∞], [+∞, +∞]]
            .scaleExtent([1 / 10, 10]) // 设置最大缩放比例
            .on('start', onZoomStart)
            .on('zoom', zooming)
            .on('end', onZoomEnd);

        //绘制svg
        const svg = d3.select('#theChart').append('svg') // 在id为‘theChart’的标签内创建svg
            .style('width', WIDTH)
            .style('height', HEIGHT * 0.9)
            .on('click', () => {
                // console.log('click', d3.event.target.tagName);
            })
            .call(zoom); // 缩放
        const g = svg.append('g'); // 则svg中创建g

        //绘制连线
        const edgesLine = svg.select('g')
            .selectAll('line')
            .data(edges) // 绑定数据
            .enter() // 为数据添加对应数量的占位符
            .append('path') // 在占位符上面生成折线（用path画）
            .attr('d', (d) => {
                return d && 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
            }) //遍历所有数据。d表示当前遍历到的数据，返回绘制的贝塞尔曲线
            .attr('id', (d, i) => {
                return 'edgepath' + i;
            }) // 设置id，用于连线文字
            .attr('marker-end', 'url(#arrow)') // 根据箭头标记的id号标记箭头
            .style('stroke', '#000') // 颜色
            .style('stroke-width', 1); // 粗细

        //连线名称
        const edgesText = svg.select('g').selectAll('.edgelabel')
            .data(edges)
            .enter()
            .append('text') // 为每一条连线创建文字区域
            .attr('class', 'edgelabel')
            .attr('dx', 80)
            .attr('dy', 0);
        edgesText.append('textPath')
            .attr('xlink:href', (d, i) => {
                return '#edgepath' + i;
            }) // 文字布置在对应id的连线上
            .style('pointer-events', 'none') // 禁止鼠标事件
            .text((d) => {
                return d && d.tag;
            }); // 设置文字内容

        //绘制连线上的箭头
        const defs = g.append('defs'); // defs定义可重复使用的元素
        const arrowheads = defs.append('marker') // 创建箭头
            .attr('id', 'arrow')
            // .attr('markerUnits', 'strokeWidth') // 设置为strokeWidth箭头会随着线的粗细进行缩放
            .attr('markerUnits', 'userSpaceOnUse') // 设置为userSpaceOnUse箭头不受连接元素的影响
            .attr('class', 'arrowhead')
            .attr('markerWidth', 20) // viewport
            .attr('markerHeight', 20) // viewport
            .attr('viewBox', '0 0 20 20') // viewBox
            .attr('refX', 9.3 + R) // 偏离圆心距离
            .attr('refY', 5) // 偏离圆心距离
            .attr('orient', 'auto'); // 绘制方向，可设定为：auto（自动确认方向）和 角度值
        arrowheads.append('path')
            .attr('d', 'M0,0 L0,10 L10,5 z') // d: 路径描述，贝塞尔曲线
            .attr('fill', '#000'); // 填充颜色

        //拖拽
        function onDragStart(d) {
            // console.log('start');
            // console.log(d3.event.active);
            // if (!d3.event.active) {
            //     simulation.alphaTarget(1) // 设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
            //         .restart();  // 拖拽节点后，重新启动模拟
            // }
            // d.fx = d.x;    // d.x是当前位置，d.fx是静止时位置
            // d.fy = d.y;
        }

        function dragging(d) {
            // d.fx = d3.event.x;
            // d.fy = d3.event.y;
        }

        function onDragEnd(d) {
            // if (!d3.event.active) simulation.alphaTarget(0);
            // d.fx = null;       // 解除dragged中固定的坐标
            // d.fy = null;
        }

        const drag = d3.drag()
            .on('start', onDragStart)
            .on('drag', dragging) // 拖拽过程
            .on('end', onDragEnd);

        //绘制节点
        const nodesCircle = svg.select('g')
            .selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle') // 创建圆
            .attr('r', 30) // 半径
            .style('fill', '#9FF') // 填充颜色
            .style('stroke', '#0CF') // 边框颜色
            .style('stroke-width', 2) // 边框粗细
            .on('click', (node) => { // 点击事件
                console.log('click');
            })
            .call(drag); // 拖拽单个节点带动整个图

        //节点名称
        const nodesTexts = svg.select('g')
            .selectAll('.jdtext')
            .data(nodes)
            .enter()
            .append('text')
            .attr('class', '.jdtext')//bug修复
            .attr('dy', '.3em') // 偏移量
            .attr('text-anchor', 'middle') // 节点名称放在圆圈中间位置
            .style('fill', 'black') // 颜色
            .style('pointer-events', 'none') // 禁止鼠标事件
            .text((d) => { // 文字内容
                return d && d.name; // 遍历nodes每一项，获取对应的name
            });

        //鼠标移到节点上有气泡提示
        nodesCircle.append('title')
            .text((node) => { // .text设置气泡提示内容
                return node.name; // 气泡提示为node的名称
            });

        //监听图元素的位置变化
        simulation.on('tick', () => {
            // 更新节点坐标
            nodesCircle.attr('transform', (d) => {
                return d && 'translate(' + d.x + ',' + d.y + ')';
            });
            // 更新节点文字坐标
            nodesTexts.attr('transform', (d) => {
                return 'translate(' + (d.x) + ',' + d.y + ')';
            });
            // 更新连线位置
            edgesLine.attr('d', (d) => {
                const path = 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
                return path;
            });
            // 更新连线文字位置
            edgesText.attr('transform', (d, i) => {
                return 'rotate(0)';
            });
        });
    }

    render() {
        return (
            <div>
                <div className="outerDiv" style={{"background-color": "#fff", "padding-bottom": "400px"}}>
                    <div className="theChart" id="theChart" ref="theChart">

                    </div>
                </div>
            </div>
        )
    }
}

