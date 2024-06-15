import { motion } from "framer-motion"
import "./job.scss"

const Job = () => {
  return (
    <div className="job">
      {/* <div>
        学部1年の8月から株式会社PLISEでアルバイトをしています。
        現在は保育施設の管理アプリケーションのプロジェクトに配属されています。
      </div> */}
      <div>
        <div className="ccwSiteWrapper">
          <iframe className="ccwSite" src="https://home.childcareweb.jp/#newsTop" frameborder="0"></iframe>
        </div>
        <div className="ccwSiteText">
          学部1年の8月から株式会社PLISEでアルバイトをしています。
          普段の稼働では詳細設計、実装、単体テスト、結合テストをしています。<br/>
          現在はChildCareWebという保育施設の管理アプリケーションのプロジェクトに配属されています。
          登録、編集、検索、一覧表示、詳細表示、CSV出力など様々な実装を行ってきました。<br/>
        </div>
      </div>
      <div>
        <div className="ccwReleaseImageWrapper">
          <iframe className="ccwReleaseImage" src="https://home.childcareweb.jp/wp-content/themes/childcareweb/img/release/release_schedule_20231005.jpg" frameborder="0"></iframe>
        </div>
        <div className="ccwReleaseText">
          今まで私が関わった様々な機能がリリースされています。
          ここに載っているものでは、銀行口座登録機能、勤怠管理機能のリニューアル、ログ強化などに関わっています。
          2023年9月以降は、まだリリースされていない機能の開発をしています。
        </div>
      </div>
    </div>
  )
}

export default Job