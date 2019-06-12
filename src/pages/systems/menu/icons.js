/**
 * Created by flyjennyetn on 2017/12/25.
 */
import React, {
    PureComponent
} from 'react';
import {
    Card,
    Icon,
    Modal,
    Row,
    Col
} from 'antd';
import styles from './style.scss';

const direction = [
    'step-backward',
    'step-forward',
    'fast-backward',
    'fast-forward',
    'shrink',
    'arrows-alt',
    'down',
    'up',
    'left',
    'right',
    'caret-up',
    'caret-down',
    'caret-left',
    'caret-right',
    'up-circle',
    'down-circle',
    'left-circle',
    'right-circle',
    'double-right',
    'double-left',
    'vertical-left',
    'vertical-right',
    'vertical-align-top',
    'vertical-align-middle',
    'vertical-align-bottom',
    'forward',
    'backward',
    'rollback',
    'enter',
    'retweet',
    'swap',
    'swap-left',
    'swap-right',
    'arrow-up',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'play-circle',
    'up-square',
    'down-square',
    'left-square',
    'right-square',
    'login',
    'logout',
    'menu-fold',
    'menu-unfold',
    'border-bottom',
    'border-horizontal',
    'border-inner',
    'border-outer',
    'border-left',
    'border-right',
    'border-top',
    'border-verticle',
    'pic-center',
    'pic-left',
    'pic-right',
    'radius-bottomleft',
    'radius-bottomright',
    'radius-upleft',
    'radius-upright',
    'fullscreen'
];

const hint = [
    'question',
    'question-circle',
    'plus',
    'plus-circle',
    'pause',
    'pause-circle',
    'minus',
    'minus-circle',
    'plus-square',
    'minus-square',
    'info',
    'info-circle',
    'exclamation',
    'exclamation-circle',
    'close',
    'close-circle',
    'close-square',
    'check',
    'check-circle',
    'check-square',
    'clock-circle',
    'warning',
    'issues-close',
    'stop'
]

const edit = [
    'edit',
    'form',
    'copy',
    'scissor',
    'delete',
    'snippets',
    'diff',
    'highlight',
    'align-center',
    'align-left',
    'align-right',
    'bg-colors',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'redo',
    'undo',
    'zoom-in',
    'zoom-out',
    'font-colors',
    'font-size',
    'line-height',
    'colum-height',
    'dash',
    'small-dash',
    'sort-ascending',
    'sort-descending',
    'drag',
    'ordered-list',
    'unordered-list',
    'radius-setting',
    'column-width'
]

const data = [
    'rea-chart',
    'pie-chart',
    'bar-chart',
    'dot-chart',
    'line-chart',
    'radar-chart',
    'heat-map',
    'fall',
    'rise',
    'stock',
    'box-plot',
    'fund',
    'sliders'
]


const brand = [
    'android',
    'apple',
    'windows',
    'ie',
    'chrome',
    'github',
    'aliwangwang',
    'dingding',
    'weibo-square',
    'weibo-circle',
    'taobao-circle',
    'html5',
    'weibo',
    'twitter',
    'wechat',
    'youtube',
    'alipay-circle',
    'taobao',
    'skype',
    'qq',
    'medium-workmark',
    'gitlab',
    'medium',
    'linkedin',
    'google-plus',
    'dropbox',
    'facebook',
    'codepen',
    'code-sandbox',
    'amazon',
    'google',
    'codepen-circle',
    'alipay',
    'ant-design',
    'ant-cloud',
    'aliyun',
    'zhihu',
    'slack',
    'slack-square',
    'behance',
    'behance-square',
    'dribbble',
    'dribbble-square',
    'instagram',
    'yuque',
    'alibaba',
    'yahoo',
    'reddit',
    'sketch'
]


const web = [
    'alert',
    'account-book',
    'api',
    'appstore',
    'audio',
    'bank',
    'bell',
    'book',
    'build',
    'bulb',
    'calculator',
    'calendar',
    'camera',
    'car',
    'carry-out',
    'cloud',
    'code',
    'compass',
    'contacts',
    'container',
    'control',
    'credit-card',
    'crown',
    'customer-service',
    'dashboard',
    'database',
    'dislike',
    'environment',
    'experiment',
    'eye-invisible',
    'eye',
    'file-add',
    'file-excel',
    'file-exclamation',
    'file-image',
    'file-markdown',
    'file-pdf',
    'file-ppt',
    'file-text',
    'file-unknown',
    'file-word',
    'file-zip',
    'file',
    'filter',
    'fire',
    'flag',
    'folder-add',
    'folder-open',
    'folder',
    'frown',
    'funnel-plot',
    'gift',
    'hdd',
    'heart',
    'home',
    'hourglass',
    'idcard',
    'insurance',
    'interaction',
    'layout',
    'like',
    'lock',
    'medicine-box',
    'mail',
    'meh',
    'message',
    'mobile',
    'money-collect',
    'notification',
    'pay-circle',
    'phone',
    'picture',
    'play-square',
    'printer',
    'profile',
    'project',
    'property-safety',
    'pushpin',
    'read',
    'reconciliation',
    'red-envelope',
    'rest',
    'rocket',
    'safety-certificate',
    'save',
    'security-scan',
    'schedule',
    'setting',
    'shop',
    'shopping',
    'skin',
    'smile',
    'sound',
    'star',
    'tablet',
    'switcher',
    'tag',
    'tags',
    'thunderbolt',
    'tool',
    'trophy',
    'unlock',
    'usb',
    'video-camera',
    'wallet',
    'apartment',
    'audit',
    'barcode',
    'bars',
    'block',
    'border',
    'branches',
    'ci',
    'cloud-download',
    'cloud-server',
    'cloud-sync',
    'cloud-upload',
    'cluster',
    'coffee',
    'copyright',
    'deployment-unit',
    'desktop',
    'disconnect',
    'dollar',
    'download',
    'ellipsis',
    'euro',
    'exception',
    'export',
    'file-done',
    'file-jpg',
    'file-protect',
    'file-search',
    'file-sync',
    'fork',
    'gateway',
    'global',
    'gold',
    'history',
    'import',
    'inbox',
    'key',
    'laptop',
    'line',
    'link',
    'loading-3-quarters',
    'loading',
    'man',
    'menu',
    'monitor',
    'more',
    'number',
    'paper-clip',
    'percentage',
    'pound',
    'poweroff',
    'pull-request',
    'qrcode',
    'reload',
    'robot',
    'safety',
    'scan',
    'search',
    'select',
    'shake',
    'share-alt',
    'shopping-cart',
    'solution',
    'sync',
    'table',
    'team',
    'to-top',
    'trademark',
    'transaction',
    'upload',
    'user-add',
    'user-delete',
    'user',
    'usergroup-add',
    'usergroup-delete',
    'wifi',
    'woman'
]




export default class extends PureComponent {

    state = {
        parentValue: undefined,
    }

    componentWillMount() {}


    componentDidMount() {
        //direction
        //hint
        //edit
        //data
        //brand
        //web
    }


    render() {
        const {
            visible,
            onCancel,
            onClick
        } = this.props;
        return (
            <Modal
                visible={visible}
                onCancel={onCancel}
                footer={null}
                title="图标"
            >
                <div className={styles.main}>
                    <h2>方向性图标</h2>
                    <ul className={`${styles.icon_lists} clear`}>
                        {direction.map((el,i)=>
                        <li key={'direction'+i} onClick={(e)=>onClick(el)}>
                            <Icon type={el} style={{fontSize: 15}} />
                        </li>
                        )}
                    </ul>
                    
                    <h2>提示建议性图标</h2>
                    <ul className={`${styles.icon_lists} clear`}>
                        {hint.map((el,i)=>
                        <li key={'hint'+i} onClick={(e)=>onClick(el)}>
                            <Icon type={el} style={{fontSize: 15}} />
                        </li>
                        )}
                    </ul>
                    
                    <h2>编辑类图标</h2>
                    <ul className={`${styles.icon_lists} clear`}>
                        {edit.map((el,i)=>
                        <li key={'edit'+i} onClick={(e)=>onClick(el)}>
                            <Icon type={el} style={{fontSize: 15}} />
                        </li>
                        )}
                    </ul>
                    
                    <h2>数据类图标</h2>
                    <ul className={`${styles.icon_lists} clear`}>
                        {data.map((el,i)=>
                        <li key={'data'+i} onClick={(e)=>onClick(el)}>
                            <Icon type={el} style={{fontSize: 15}} />
                        </li>
                        )}
                    </ul>
                    
                    <h2>品牌和标识</h2>
                    <ul className={`${styles.icon_lists} clear`}>
                        {brand.map((el,i)=>
                        <li key={'brand'+i} onClick={(e)=>onClick(el)}>
                            <Icon type={el} style={{fontSize: 15}} />
                        </li>
                        )}
                    </ul>
                    
                    <h2>网站通用图标</h2>
                    <ul className={`${styles.icon_lists} clear`}>
                        {web.map((el,i)=>
                        <li key={'web'+i} onClick={(e)=>onClick(el)}>
                            <Icon type={el} style={{fontSize: 15}} />
                        </li>
                        )}
                    </ul>
                </div>
            </Modal>
        )
    }
}