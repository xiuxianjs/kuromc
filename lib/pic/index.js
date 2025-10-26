import { picture } from 'jsxp';

const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
/**
 * @param url
 * @param options
 * @returns
 */
const picURL = async (url, options) => {
    const { selector = 'body', scrollTo = true, selectorAction, Viewport = {
        width: 1280,
        height: 7200
    }, GoToOptions = {
        timeout: 120000,
        waitUntil: 'networkidle0'
    }, action, sleepTime = 1000 } = options ?? {};
    const pic = await picture();
    if (!pic) {
        logger.error('puppeteer init failed');
        return;
    }
    let page = void 0;
    try {
        const browser = pic.puppeteer.browser;
        page = await browser?.newPage();
        if (!page) {
            logger.error('page is null');
            return;
        }
        // 设置页面桌面宽度
        await page.setViewport(Viewport);
        // 跳转到指定页面
        await page.goto(url, GoToOptions);
        // 滚动到底部
        if (scrollTo) {
            await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        }
        if (action) {
            await action(page);
        }
        await sleep(sleepTime);
        // 获取页面内容
        const bodys = await page.$$(selector);
        const body = selectorAction ? selectorAction(bodys) : bodys[0];
        if (!body) {
            logger.error('body is null');
            if (page?.close) {
                void page.close();
            }
            return;
        }
        const buff = await body.screenshot({ type: 'png' });
        if (page?.close) {
            void page.close();
        }
        if (!buff) {
            return;
        }
        if (buff instanceof Uint8Array) {
            return Buffer.from(buff);
        }
        else if (Buffer.isBuffer(buff)) {
            return buff;
        }
        new Error('buff is not Buffer');
    }
    catch (err) {
        if (page?.close) {
            void page.close();
        }
        logger.error(err);
    }
};

export { picURL };
