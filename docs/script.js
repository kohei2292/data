// ===================================
// Exercise Data
// ===================================
const exercises = {
    beginner: [
        {
            id: 'beginner-1',
            title: '名簿入力 - 基礎',
            description: '基本的な個人情報の入力練習です',
            difficulty: 'beginner',
            estimatedTime: '2分',
            problemData: { 氏名: '山田 太郎', 年齢: '32', 電話番号: '090-1234-5678' },
            fields: [
                { name: '氏名', type: 'text', answer: '山田 太郎' },
                { name: '年齢', type: 'number', answer: '32' },
                { name: '電話番号', type: 'text', answer: '090-1234-5678' }
            ]
        },
        {
            id: 'beginner-2',
            title: '住所入力 - 基礎',
            description: '住所の正確な入力を練習します',
            difficulty: 'beginner',
            estimatedTime: '3分',
            problemData: { 郵便番号: '100-0001', 都道府県: '東京都', 市区町村: '千代田区', 番地: '千代田1-1-1' },
            fields: [
                { name: '郵便番号', type: 'text', answer: '100-0001' },
                { name: '都道府県', type: 'text', answer: '東京都' },
                { name: '市区町村', type: 'text', answer: '千代田区' },
                { name: '番地', type: 'text', answer: '千代田1-1-1' }
            ]
        },
        {
            id: 'beginner-3',
            title: '数値入力 - 基礎',
            description: '数字の正確な入力を練習します',
            difficulty: 'beginner',
            estimatedTime: '2分',
            problemData: { 商品コード: 'A-12345', 単価: '1,200', 数量: '5', 合計: '6,000' },
            fields: [
                { name: '商品コード', type: 'text', answer: 'A-12345' },
                { name: '単価', type: 'text', answer: '1,200' },
                { name: '数量', type: 'number', answer: '5' },
                { name: '合計', type: 'text', answer: '6,000' }
            ]
        },
        {
            id: 'beginner-4',
            title: '名簿入力 - 応用',
            description: 'フリガナを含む名簿入力です',
            difficulty: 'beginner',
            estimatedTime: '3分',
            problemData: { 氏名: '鈴木 美咲', フリガナ: 'スズキ ミサキ', 生年月日: '1995-03-15' },
            fields: [
                { name: '氏名', type: 'text', answer: '鈴木 美咲' },
                { name: 'フリガナ', type: 'text', answer: 'スズキ ミサキ' },
                { name: '生年月日', type: 'text', answer: '1995-03-15' }
            ]
        },
        {
            id: 'beginner-5',
            title: 'メールアドレス入力',
            description: 'メールアドレスの正確な入力を練習します',
            difficulty: 'beginner',
            estimatedTime: '2分',
            problemData: { 氏名: '高橋 健太', メール: 'kenta.takahashi@example.jp', 電話: '080-9876-5432' },
            fields: [
                { name: '氏名', type: 'text', answer: '高橋 健太' },
                { name: 'メール', type: 'email', answer: 'kenta.takahashi@example.jp' },
                { name: '電話', type: 'text', answer: '080-9876-5432' }
            ]
        },
        {
            id: 'beginner-6',
            title: '日付入力練習',
            description: '日付フォーマットの入力を練習します',
            difficulty: 'beginner',
            estimatedTime: '2分',
            problemData: { イベント名: '新年会', 開催日: '2025-01-10', 時間: '18:00' },
            fields: [
                { name: 'イベント名', type: 'text', answer: '新年会' },
                { name: '開催日', type: 'text', answer: '2025-01-10' },
                { name: '時間', type: 'text', answer: '18:00' }
            ]
        },
        {
            id: 'beginner-7',
            title: '商品情報 - 基礎',
            description: '商品の基本情報を入力します',
            difficulty: 'beginner',
            estimatedTime: '2分',
            problemData: { 商品名: 'ノートPC', メーカー: 'ABC電機', 価格: '89,800' },
            fields: [
                { name: '商品名', type: 'text', answer: 'ノートPC' },
                { name: 'メーカー', type: 'text', answer: 'ABC電機' },
                { name: '価格', type: 'text', answer: '89,800' }
            ]
        },
        {
            id: 'beginner-8',
            title: '会員登録情報',
            description: '会員登録フォームの入力練習です',
            difficulty: 'beginner',
            estimatedTime: '3分',
            problemData: { ユーザー名: 'tanaka123', 氏名: '田中 次郎', 年齢: '28' },
            fields: [
                { name: 'ユーザー名', type: 'text', answer: 'tanaka123' },
                { name: '氏名', type: 'text', answer: '田中 次郎' },
                { name: '年齢', type: 'number', answer: '28' }
            ]
        },
        {
            id: 'beginner-9',
            title: '住所入力 - 応用',
            description: 'マンション名を含む住所入力です',
            difficulty: 'beginner',
            estimatedTime: '3分',
            problemData: { 郵便番号: '150-0002', 住所: '東京都渋谷区渋谷2-3-4', 建物名: 'サンプルマンション101号' },
            fields: [
                { name: '郵便番号', type: 'text', answer: '150-0002' },
                { name: '住所', type: 'text', answer: '東京都渋谷区渋谷2-3-4' },
                { name: '建物名', type: 'text', answer: 'サンプルマンション101号' }
            ]
        },
        {
            id: 'beginner-10',
            title: '在庫管理 - 基礎',
            description: '在庫数の入力練習です',
            difficulty: 'beginner',
            estimatedTime: '2分',
            problemData: { 商品コード: 'SKU-001', 商品名: 'ボールペン(黒)', 在庫数: '250' },
            fields: [
                { name: '商品コード', type: 'text', answer: 'SKU-001' },
                { name: '商品名', type: 'text', answer: 'ボールペン(黒)' },
                { name: '在庫数', type: 'number', answer: '250' }
            ]
        },
        {
            id: 'beginner-11',
            title: '予約情報入力',
            description: '予約データの入力練習です',
            difficulty: 'beginner',
            estimatedTime: '3分',
            problemData: { 予約者名: '佐々木 愛', 予約日: '2025-02-14', 人数: '4' },
            fields: [
                { name: '予約者名', type: 'text', answer: '佐々木 愛' },
                { name: '予約日', type: 'text', answer: '2025-02-14' },
                { name: '人数', type: 'number', answer: '4' }
            ]
        },
        {
            id: 'beginner-12',
            title: '社員情報 - 基礎',
            description: '社員の基本情報を入力します',
            difficulty: 'beginner',
            estimatedTime: '3分',
            problemData: { 社員番号: 'EMP-2024-001', 氏名: '伊藤 大輔', 部署: '総務部' },
            fields: [
                { name: '社員番号', type: 'text', answer: 'EMP-2024-001' },
                { name: '氏名', type: 'text', answer: '伊藤 大輔' },
                { name: '部署', type: 'text', answer: '総務部' }
            ]
        },
        {
            id: 'beginner-13',
            title: '注文情報 - 基礎',
            description: '注文データの入力練習です',
            difficulty: 'beginner',
            estimatedTime: '2分',
            problemData: { 注文番号: 'ORD-12345', 商品名: 'Tシャツ(L)', 数量: '3' },
            fields: [
                { name: '注文番号', type: 'text', answer: 'ORD-12345' },
                { name: '商品名', type: 'text', answer: 'Tシャツ(L)' },
                { name: '数量', type: 'number', answer: '3' }
            ]
        },
        {
            id: 'beginner-14',
            title: '学生情報入力',
            description: '学生の基本情報を入力します',
            difficulty: 'beginner',
            estimatedTime: '3分',
            problemData: { 学籍番号: 'S2024001', 氏名: '渡辺 さくら', 学年: '2' },
            fields: [
                { name: '学籍番号', type: 'text', answer: 'S2024001' },
                { name: '氏名', type: 'text', answer: '渡辺 さくら' },
                { name: '学年', type: 'number', answer: '2' }
            ]
        },
        {
            id: 'beginner-15',
            title: '配送先情報',
            description: '配送先の入力練習です',
            difficulty: 'beginner',
            estimatedTime: '3分',
            problemData: { 受取人: '中村 優子', 電話番号: '070-1111-2222', 郵便番号: '530-0001' },
            fields: [
                { name: '受取人', type: 'text', answer: '中村 優子' },
                { name: '電話番号', type: 'text', answer: '070-1111-2222' },
                { name: '郵便番号', type: 'text', answer: '530-0001' }
            ]
        }
    ],
    intermediate: [
        {
            id: 'intermediate-1',
            title: 'アンケート入力',
            description: '複数項目のアンケートデータを入力します',
            difficulty: 'intermediate',
            estimatedTime: '5分',
            problemData: { 回答者名: '佐藤 花子', 年代: '30代', 性別: '女性', メールアドレス: 'hanako.sato@example.com', 満足度: '5', コメント: '大変満足しています。今後も利用したいです。' },
            fields: [
                { name: '回答者名', type: 'text', answer: '佐藤 花子' },
                { name: '年代', type: 'text', answer: '30代' },
                { name: '性別', type: 'text', answer: '女性' },
                { name: 'メールアドレス', type: 'email', answer: 'hanako.sato@example.com' },
                { name: '満足度', type: 'number', answer: '5' },
                { name: 'コメント', type: 'textarea', answer: '大変満足しています。今後も利用したいです。' }
            ]
        },
        {
            id: 'intermediate-2',
            title: '商品データ入力',
            description: '商品情報の詳細な入力練習です',
            difficulty: 'intermediate',
            estimatedTime: '4分',
            problemData: { 商品名: 'ワイヤレスマウス', 型番: 'WM-2024-BK', 価格: '3,980', 在庫数: '150', カテゴリ: '周辺機器', 発売日: '2024-01-15' },
            fields: [
                { name: '商品名', type: 'text', answer: 'ワイヤレスマウス' },
                { name: '型番', type: 'text', answer: 'WM-2024-BK' },
                { name: '価格', type: 'text', answer: '3,980' },
                { name: '在庫数', type: 'number', answer: '150' },
                { name: 'カテゴリ', type: 'text', answer: '周辺機器' },
                { name: '発売日', type: 'text', answer: '2024-01-15' }
            ]
        },
        {
            id: 'intermediate-3',
            title: '顧客情報入力',
            description: '顧客の詳細情報を正確に入力します',
            difficulty: 'intermediate',
            estimatedTime: '5分',
            problemData: { 顧客ID: 'C-20240001', 会社名: '株式会社サンプル商事', 担当者名: '田中 一郎', 部署: '営業部', 電話番号: '03-1234-5678', FAX: '03-1234-5679', メール: 'tanaka@sample.co.jp' },
            fields: [
                { name: '顧客ID', type: 'text', answer: 'C-20240001' },
                { name: '会社名', type: 'text', answer: '株式会社サンプル商事' },
                { name: '担当者名', type: 'text', answer: '田中 一郎' },
                { name: '部署', type: 'text', answer: '営業部' },
                { name: '電話番号', type: 'text', answer: '03-1234-5678' },
                { name: 'FAX', type: 'text', answer: '03-1234-5679' },
                { name: 'メール', type: 'email', answer: 'tanaka@sample.co.jp' }
            ]
        },
        {
            id: 'intermediate-4',
            title: 'セミナー申込情報',
            description: 'セミナー参加申込データを入力します',
            difficulty: 'intermediate',
            estimatedTime: '5分',
            problemData: { 申込番号: 'SEM-2025-0123', 氏名: '小林 健', フリガナ: 'コバヤシ ケン', 会社名: '有限会社テクノロジー', メール: 'ken.kobayashi@techno.jp', 参加人数: '2', 備考: 'プロジェクターの使用を希望します' },
            fields: [
                { name: '申込番号', type: 'text', answer: 'SEM-2025-0123' },
                { name: '氏名', type: 'text', answer: '小林 健' },
                { name: 'フリガナ', type: 'text', answer: 'コバヤシ ケン' },
                { name: '会社名', type: 'text', answer: '有限会社テクノロジー' },
                { name: 'メール', type: 'email', answer: 'ken.kobayashi@techno.jp' },
                { name: '参加人数', type: 'number', answer: '2' },
                { name: '備考', type: 'textarea', answer: 'プロジェクターの使用を希望します' }
            ]
        },
        {
            id: 'intermediate-5',
            title: '求人応募情報',
            description: '求人応募者のデータを入力します',
            difficulty: 'intermediate',
            estimatedTime: '6分',
            problemData: { 応募ID: 'APP-2024-567', 氏名: '松本 真理', フリガナ: 'マツモト マリ', 生年月日: '1992-07-20', 電話: '090-3333-4444', メール: 'mari.matsumoto@email.com', 希望職種: '事務職', 最終学歴: '大学卒' },
            fields: [
                { name: '応募ID', type: 'text', answer: 'APP-2024-567' },
                { name: '氏名', type: 'text', answer: '松本 真理' },
                { name: 'フリガナ', type: 'text', answer: 'マツモト マリ' },
                { name: '生年月日', type: 'text', answer: '1992-07-20' },
                { name: '電話', type: 'text', answer: '090-3333-4444' },
                { name: 'メール', type: 'email', answer: 'mari.matsumoto@email.com' },
                { name: '希望職種', type: 'text', answer: '事務職' },
                { name: '最終学歴', type: 'text', answer: '大学卒' }
            ]
        },
        {
            id: 'intermediate-6',
            title: '医療受付情報',
            description: '病院受付データを入力します',
            difficulty: 'intermediate',
            estimatedTime: '5分',
            problemData: { 患者ID: 'P-2024-8901', 氏名: '木村 聡', フリガナ: 'キムラ サトシ', 生年月日: '1980-11-05', 電話: '080-5555-6666', 診察券番号: '123456', 診療科: '内科' },
            fields: [
                { name: '患者ID', type: 'text', answer: 'P-2024-8901' },
                { name: '氏名', type: 'text', answer: '木村 聡' },
                { name: 'フリガナ', type: 'text', answer: 'キムラ サトシ' },
                { name: '生年月日', type: 'text', answer: '1980-11-05' },
                { name: '電話', type: 'text', answer: '080-5555-6666' },
                { name: '診察券番号', type: 'text', answer: '123456' },
                { name: '診療科', type: 'text', answer: '内科' }
            ]
        },
        {
            id: 'intermediate-7',
            title: '不動産物件情報',
            description: '賃貸物件のデータを入力します',
            difficulty: 'intermediate',
            estimatedTime: '6分',
            problemData: { 物件ID: 'PROP-2024-789', 物件名: 'グリーンハイツ', 所在地: '神奈川県横浜市中区本町1-2-3', 間取り: '2LDK', 賃料: '95,000', 管理費: '8,000', 築年数: '15' },
            fields: [
                { name: '物件ID', type: 'text', answer: 'PROP-2024-789' },
                { name: '物件名', type: 'text', answer: 'グリーンハイツ' },
                { name: '所在地', type: 'text', answer: '神奈川県横浜市中区本町1-2-3' },
                { name: '間取り', type: 'text', answer: '2LDK' },
                { name: '賃料', type: 'text', answer: '95,000' },
                { name: '管理費', type: 'text', answer: '8,000' },
                { name: '築年数', type: 'number', answer: '15' }
            ]
        },
        {
            id: 'intermediate-8',
            title: 'イベント参加者情報',
            description: 'イベント参加者のデータを入力します',
            difficulty: 'intermediate',
            estimatedTime: '5分',
            problemData: { 参加ID: 'EVT-2025-456', 氏名: '加藤 美穂', 会社名: '株式会社デザインワークス', 部署: '企画部', 電話: '03-9999-8888', メール: 'miho.kato@design-w.co.jp', 参加日: '2025-03-20' },
            fields: [
                { name: '参加ID', type: 'text', answer: 'EVT-2025-456' },
                { name: '氏名', type: 'text', answer: '加藤 美穂' },
                { name: '会社名', type: 'text', answer: '株式会社デザインワークス' },
                { name: '部署', type: 'text', answer: '企画部' },
                { name: '電話', type: 'text', answer: '03-9999-8888' },
                { name: 'メール', type: 'email', answer: 'miho.kato@design-w.co.jp' },
                { name: '参加日', type: 'text', answer: '2025-03-20' }
            ]
        },
        {
            id: 'intermediate-9',
            title: '書籍注文情報',
            description: '書籍の注文データを入力します',
            difficulty: 'intermediate',
            estimatedTime: '5分',
            problemData: { 注文番号: 'BOOK-2024-321', 書籍名: 'データ入力完全ガイド', 著者: '山本 太郎', ISBN: '978-4-12345-678-9', 出版社: 'サンプル出版', 価格: '2,800', 注文数: '5' },
            fields: [
                { name: '注文番号', type: 'text', answer: 'BOOK-2024-321' },
                { name: '書籍名', type: 'text', answer: 'データ入力完全ガイド' },
                { name: '著者', type: 'text', answer: '山本 太郎' },
                { name: 'ISBN', type: 'text', answer: '978-4-12345-678-9' },
                { name: '出版社', type: 'text', answer: 'サンプル出版' },
                { name: '価格', type: 'text', answer: '2,800' },
                { name: '注文数', type: 'number', answer: '5' }
            ]
        },
        {
            id: 'intermediate-10',
            title: '会員更新情報',
            description: '会員情報の更新データを入力します',
            difficulty: 'intermediate',
            estimatedTime: '5分',
            problemData: { 会員番号: 'MEM-2020-1234', 氏名: '斉藤 裕子', フリガナ: 'サイトウ ユウコ', 電話: '090-7777-8888', メール: 'yuko.saito@example.net', 更新日: '2025-01-01', 会員種別: 'ゴールド' },
            fields: [
                { name: '会員番号', type: 'text', answer: 'MEM-2020-1234' },
                { name: '氏名', type: 'text', answer: '斉藤 裕子' },
                { name: 'フリガナ', type: 'text', answer: 'サイトウ ユウコ' },
                { name: '電話', type: 'text', answer: '090-7777-8888' },
                { name: 'メール', type: 'email', answer: 'yuko.saito@example.net' },
                { name: '更新日', type: 'text', answer: '2025-01-01' },
                { name: '会員種別', type: 'text', answer: 'ゴールド' }
            ]
        }
    ],
    advanced: [
        {
            id: 'advanced-1',
            title: '請求書データ入力',
            description: '実務形式の請求書データを入力します',
            difficulty: 'advanced',
            estimatedTime: '8分',
            problemData: { 請求書番号: 'INV-2024-0001', 発行日: '2024-12-18', 支払期限: '2025-01-18', 請求先: '株式会社テストコーポレーション', 品目1: 'Webサイト制作', 単価1: '500,000', 数量1: '1', 品目2: '保守サポート(月額)', 単価2: '50,000', 数量2: '3', 小計: '650,000', 消費税: '65,000', 合計金額: '715,000' },
            fields: [
                { name: '請求書番号', type: 'text', answer: 'INV-2024-0001' },
                { name: '発行日', type: 'text', answer: '2024-12-18' },
                { name: '支払期限', type: 'text', answer: '2025-01-18' },
                { name: '請求先', type: 'text', answer: '株式会社テストコーポレーション' },
                { name: '品目1', type: 'text', answer: 'Webサイト制作' },
                { name: '単価1', type: 'text', answer: '500,000' },
                { name: '数量1', type: 'number', answer: '1' },
                { name: '品目2', type: 'text', answer: '保守サポート(月額)' },
                { name: '単価2', type: 'text', answer: '50,000' },
                { name: '数量2', type: 'number', answer: '3' },
                { name: '小計', type: 'text', answer: '650,000' },
                { name: '消費税', type: 'text', answer: '65,000' },
                { name: '合計金額', type: 'text', answer: '715,000' }
            ]
        },
        {
            id: 'advanced-2',
            title: '売上伝票入力',
            description: '実務レベルの売上伝票を入力します',
            difficulty: 'advanced',
            estimatedTime: '10分',
            problemData: { 伝票番号: 'SL-2024-1218-001', 日付: '2024-12-18', 顧客コード: 'C-0123', 顧客名: '山田商店', 商品1: 'りんご(青森産)', 数量1: '50', 単価1: '120', 商品2: 'みかん(愛媛産)', 数量2: '30', 単価2: '80', 商品3: 'バナナ(フィリピン産)', 数量3: '20', 単価3: '150', 商品合計: '10,800', 配送料: '500', 総合計: '11,300', 支払方法: '銀行振込', 備考: '午前中配送希望' },
            fields: [
                { name: '伝票番号', type: 'text', answer: 'SL-2024-1218-001' },
                { name: '日付', type: 'text', answer: '2024-12-18' },
                { name: '顧客コード', type: 'text', answer: 'C-0123' },
                { name: '顧客名', type: 'text', answer: '山田商店' },
                { name: '商品1', type: 'text', answer: 'りんご(青森産)' },
                { name: '数量1', type: 'number', answer: '50' },
                { name: '単価1', type: 'text', answer: '120' },
                { name: '商品2', type: 'text', answer: 'みかん(愛媛産)' },
                { name: '数量2', type: 'number', answer: '30' },
                { name: '単価2', type: 'text', answer: '80' },
                { name: '商品3', type: 'text', answer: 'バナナ(フィリピン産)' },
                { name: '数量3', type: 'number', answer: '20' },
                { name: '単価3', type: 'text', answer: '150' },
                { name: '商品合計', type: 'text', answer: '10,800' },
                { name: '配送料', type: 'text', answer: '500' },
                { name: '総合計', type: 'text', answer: '11,300' },
                { name: '支払方法', type: 'text', answer: '銀行振込' },
                { name: '備考', type: 'textarea', answer: '午前中配送希望' }
            ]
        },
        {
            id: 'advanced-3',
            title: '給与明細データ',
            description: '給与明細の詳細データを入力します',
            difficulty: 'advanced',
            estimatedTime: '12分',
            problemData: { 社員番号: 'EMP-2024-0456', 氏名: '吉田 誠', 部署: '営業部', 基本給: '280,000', 残業手当: '45,000', 通勤手当: '15,000', 住宅手当: '20,000', 支給合計: '360,000', 健康保険: '18,000', 厚生年金: '25,000', 雇用保険: '1,800', 所得税: '12,500', 控除合計: '57,300', 差引支給額: '302,700', 支給日: '2024-12-25' },
            fields: [
                { name: '社員番号', type: 'text', answer: 'EMP-2024-0456' },
                { name: '氏名', type: 'text', answer: '吉田 誠' },
                { name: '部署', type: 'text', answer: '営業部' },
                { name: '基本給', type: 'text', answer: '280,000' },
                { name: '残業手当', type: 'text', answer: '45,000' },
                { name: '通勤手当', type: 'text', answer: '15,000' },
                { name: '住宅手当', type: 'text', answer: '20,000' },
                { name: '支給合計', type: 'text', answer: '360,000' },
                { name: '健康保険', type: 'text', answer: '18,000' },
                { name: '厚生年金', type: 'text', answer: '25,000' },
                { name: '雇用保険', type: 'text', answer: '1,800' },
                { name: '所得税', type: 'text', answer: '12,500' },
                { name: '控除合計', type: 'text', answer: '57,300' },
                { name: '差引支給額', type: 'text', answer: '302,700' },
                { name: '支給日', type: 'text', answer: '2024-12-25' }
            ]
        },
        {
            id: 'advanced-4',
            title: '契約書データ入力',
            description: '業務委託契約書のデータを入力します',
            difficulty: 'advanced',
            estimatedTime: '10分',
            problemData: { 契約番号: 'CON-2025-0089', 契約日: '2025-01-15', 委託者: '株式会社グローバルシステムズ', 受託者: '有限会社プロフェッショナルサービス', 業務内容: 'システム開発及び保守業務', 契約期間開始: '2025-02-01', 契約期間終了: '2026-01-31', 契約金額: '12,000,000', 支払条件: '月末締め翌月末払い', 月額報酬: '1,000,000', 更新条項: '双方合意により自動更新', 備考: '機密保持契約を別途締結' },
            fields: [
                { name: '契約番号', type: 'text', answer: 'CON-2025-0089' },
                { name: '契約日', type: 'text', answer: '2025-01-15' },
                { name: '委託者', type: 'text', answer: '株式会社グローバルシステムズ' },
                { name: '受託者', type: 'text', answer: '有限会社プロフェッショナルサービス' },
                { name: '業務内容', type: 'text', answer: 'システム開発及び保守業務' },
                { name: '契約期間開始', type: 'text', answer: '2025-02-01' },
                { name: '契約期間終了', type: 'text', answer: '2026-01-31' },
                { name: '契約金額', type: 'text', answer: '12,000,000' },
                { name: '支払条件', type: 'text', answer: '月末締め翌月末払い' },
                { name: '月額報酬', type: 'text', answer: '1,000,000' },
                { name: '更新条項', type: 'text', answer: '双方合意により自動更新' },
                { name: '備考', type: 'textarea', answer: '機密保持契約を別途締結' }
            ]
        },
        {
            id: 'advanced-5',
            title: '在庫管理表 - 総合',
            description: '複数商品の在庫管理データを入力します',
            difficulty: 'advanced',
            estimatedTime: '15分',
            problemData: { 管理番号: 'INV-2024-Q4-001', 更新日: '2024-12-18', 商品1: 'ノートPC Core i7モデル', SKU1: 'PC-I7-2024', 入庫数1: '50', 出庫数1: '38', 在庫数1: '12', 商品2: 'ワイヤレスキーボード', SKU2: 'KB-WL-001', 入庫数2: '100', 出庫数2: '85', 在庫数2: '15', 商品3: 'USBメモリ 64GB', SKU3: 'USB-64G-BK', 入庫数3: '200', 出庫数3: '175', 在庫数3: '25', 総入庫数: '350', 総出庫数: '298', 総在庫数: '52', 担当者: '倉庫管理部 鈴木', 備考: '年末棚卸実施済み' },
            fields: [
                { name: '管理番号', type: 'text', answer: 'INV-2024-Q4-001' },
                { name: '更新日', type: 'text', answer: '2024-12-18' },
                { name: '商品1', type: 'text', answer: 'ノートPC Core i7モデル' },
                { name: 'SKU1', type: 'text', answer: 'PC-I7-2024' },
                { name: '入庫数1', type: 'number', answer: '50' },
                { name: '出庫数1', type: 'number', answer: '38' },
                { name: '在庫数1', type: 'number', answer: '12' },
                { name: '商品2', type: 'text', answer: 'ワイヤレスキーボード' },
                { name: 'SKU2', type: 'text', answer: 'KB-WL-001' },
                { name: '入庫数2', type: 'number', answer: '100' },
                { name: '出庫数2', type: 'number', answer: '85' },
                { name: '在庫数2', type: 'number', answer: '15' },
                { name: '商品3', type: 'text', answer: 'USBメモリ 64GB' },
                { name: 'SKU3', type: 'text', answer: 'USB-64G-BK' },
                { name: '入庫数3', type: 'number', answer: '200' },
                { name: '出庫数3', type: 'number', answer: '175' },
                { name: '在庫数3', type: 'number', answer: '25' },
                { name: '総入庫数', type: 'number', answer: '350' },
                { name: '総出庫数', type: 'number', answer: '298' },
                { name: '総在庫数', type: 'number', answer: '52' },
                { name: '担当者', type: 'text', answer: '倉庫管理部 鈴木' },
                { name: '備考', type: 'textarea', answer: '年末棚卸実施済み' }
            ]
        }
    ]
};

// ===================================
// State Management
// ===================================
let currentExercise = null;
let startTime = null;
let timerInterval = null;
let userResults = JSON.parse(localStorage.getItem('userResults')) || [];

// ===================================
// DOM Elements
// ===================================
const exercisesGrid = document.getElementById('exercisesGrid');
const exerciseModal = document.getElementById('exerciseModal');
const modalClose = document.getElementById('modalClose');
const exerciseContainer = document.getElementById('exerciseContainer');
const resultsDashboard = document.getElementById('resultsDashboard');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeTabs();
    loadExercises('beginner');
    loadResults();
});

// ===================================
// Navigation
// ===================================
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Scroll spy
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.section, .hero');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// Tabs
// ===================================
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.dataset.level;

            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            loadExercises(level);
        });
    });
}

// ===================================
// Load Exercises
// ===================================
function loadExercises(level) {
    const exerciseList = exercises[level];
    exercisesGrid.innerHTML = '';

    exerciseList.forEach(exercise => {
        const card = createExerciseCard(exercise);
        exercisesGrid.appendChild(card);
    });
}

function createExerciseCard(exercise) {
    const card = document.createElement('div');
    card.className = 'exercise-card';

    const badgeClass = `badge-${exercise.difficulty}`;
    const difficultyText = {
        beginner: '初級',
        intermediate: '中級',
        advanced: '実務形式'
    }[exercise.difficulty];

    card.innerHTML = `
        <span class="exercise-badge ${badgeClass}">${difficultyText}</span>
        <h3>${exercise.title}</h3>
        <p>${exercise.description}</p>
        <div class="exercise-meta">
            <span>⏱ ${exercise.estimatedTime}</span>
            <span>📝 ${exercise.fields.length}項目</span>
        </div>
    `;

    card.addEventListener('click', () => openExercise(exercise));

    return card;
}

// ===================================
// Exercise Modal
// ===================================
function openExercise(exercise) {
    currentExercise = exercise;
    exerciseModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    renderExercise(exercise);
    startTimer();
}

function closeExercise() {
    exerciseModal.classList.remove('active');
    document.body.style.overflow = '';
    stopTimer();
    currentExercise = null;
}

modalClose.addEventListener('click', closeExercise);
exerciseModal.querySelector('.modal-overlay').addEventListener('click', closeExercise);

// ===================================
// Render Exercise
// ===================================
function renderExercise(exercise) {
    const problemDataHtml = Object.entries(exercise.problemData)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');

    const fieldsHtml = exercise.fields.map((field, index) => {
        const inputType = field.type === 'textarea' ? 'textarea' : 'input';
        const inputAttrs = field.type === 'textarea'
            ? 'rows="3"'
            : `type="${field.type}"`;

        return `
            <div class="form-group">
                <label class="form-label" for="field-${index}">${field.name}</label>
                <${inputType} 
                    class="form-input" 
                    id="field-${index}" 
                    ${inputAttrs}
                    autocomplete="off"
                    data-answer="${field.answer}"
                ></${inputType}>
            </div>
        `;
    }).join('');

    exerciseContainer.innerHTML = `
        <div class="exercise-header">
            <h2 class="exercise-title">${exercise.title}</h2>
            <p class="exercise-description">${exercise.description}</p>
        </div>
        
        <div class="exercise-problem">
            <span class="problem-label">📋 問題データ</span>
            <div class="problem-data">${problemDataHtml}</div>
        </div>
        
        <div class="timer-display" id="timerDisplay">00:00</div>
        
        <form class="exercise-form" id="exerciseForm">
            ${fieldsHtml}
            <button type="submit" class="submit-btn">採点する</button>
        </form>
    `;

    document.getElementById('exerciseForm').addEventListener('submit', handleSubmit);
}

// ===================================
// Timer
// ===================================
function startTimer() {
    startTime = Date.now();
    const timerDisplay = document.getElementById('timerDisplay');

    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const seconds = (elapsed % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function getElapsedTime() {
    return Math.floor((Date.now() - startTime) / 1000);
}

// ===================================
// Form Submission & Grading
// ===================================
function handleSubmit(e) {
    e.preventDefault();
    stopTimer();

    const formInputs = document.querySelectorAll('.form-input');
    const results = {
        correct: 0,
        total: currentExercise.fields.length,
        errors: [],
        time: getElapsedTime()
    };

    formInputs.forEach((input, index) => {
        const userAnswer = input.value.trim();
        const correctAnswer = input.dataset.answer;
        const fieldName = currentExercise.fields[index].name;

        if (checkAnswer(userAnswer, correctAnswer)) {
            results.correct++;
        } else {
            results.errors.push({
                field: fieldName,
                userAnswer: userAnswer || '(未入力)',
                correctAnswer: correctAnswer
            });
        }
    });

    saveResult(results);
    displayResults(results);
}

function checkAnswer(userAnswer, correctAnswer) {
    // Normalize answers for comparison
    const normalize = (str) => str.trim().replace(/\s+/g, ' ');
    return normalize(userAnswer) === normalize(correctAnswer);
}

// ===================================
// Results Display
// ===================================
function displayResults(results) {
    const percentage = Math.round((results.correct / results.total) * 100);
    const minutes = Math.floor(results.time / 60);
    const seconds = results.time % 60;
    const timeString = `${minutes}分${seconds}秒`;

    let scoreClass, message;
    if (percentage === 100) {
        scoreClass = 'score-perfect';
        message = '完璧です！素晴らしい！';
    } else if (percentage >= 80) {
        scoreClass = 'score-good';
        message = 'よくできました！';
    } else {
        scoreClass = 'score-needs-work';
        message = 'もう少し練習しましょう';
    }

    const errorsHtml = results.errors.length > 0 ? `
        <div class="error-list">
            <h4 style="margin-bottom: 1rem; color: var(--accent-color);">❌ ミス箇所</h4>
            ${results.errors.map(error => `
                <div class="error-item">
                    <strong>${error.field}</strong><br>
                    あなたの回答: ${error.userAnswer}<br>
                    正解: ${error.correctAnswer}
                </div>
            `).join('')}
        </div>
    ` : '<p style="color: var(--success-color); font-size: 1.125rem;">✨ ミスなし！完璧です！</p>';

    exerciseContainer.innerHTML = `
        <div class="result-display">
            <div class="result-score ${scoreClass}">${percentage}%</div>
            <div class="result-message">${message}</div>
            
            <div class="result-stats">
                <div class="result-stat">
                    <div class="result-stat-value">${results.correct}/${results.total}</div>
                    <div class="result-stat-label">正解数</div>
                </div>
                <div class="result-stat">
                    <div class="result-stat-value">${timeString}</div>
                    <div class="result-stat-label">所要時間</div>
                </div>
                <div class="result-stat">
                    <div class="result-stat-value">${results.errors.length}</div>
                    <div class="result-stat-label">ミス数</div>
                </div>
            </div>
            
            ${errorsHtml}
            
            <div class="result-actions">
                <button class="btn btn-primary" onclick="retryExercise()">
                    <span>もう一度挑戦</span>
                </button>
                <button class="btn btn-secondary" onclick="closeExercise()">
                    <span>閉じる</span>
                </button>
            </div>
        </div>
    `;
}

function retryExercise() {
    renderExercise(currentExercise);
    startTimer();
}

// ===================================
// Save & Load Results
// ===================================
function saveResult(results) {
    const resultData = {
        exerciseId: currentExercise.id,
        exerciseTitle: currentExercise.title,
        difficulty: currentExercise.difficulty,
        score: Math.round((results.correct / results.total) * 100),
        time: results.time,
        errors: results.errors.length,
        date: new Date().toISOString()
    };

    userResults.unshift(resultData);

    // Keep only last 20 results
    if (userResults.length > 20) {
        userResults = userResults.slice(0, 20);
    }

    localStorage.setItem('userResults', JSON.stringify(userResults));
    loadResults();
}

function loadResults() {
    if (userResults.length === 0) {
        resultsDashboard.innerHTML = `
            <div class="results-empty">
                <div class="empty-icon">📊</div>
                <h3>まだ練習記録がありません</h3>
                <p>練習問題を解いて、あなたの成長を記録しましょう！</p>
                <a href="#practice" class="btn btn-primary">練習を始める</a>
            </div>
        `;
        return;
    }

    const resultsHtml = userResults.map(result => {
        const date = new Date(result.date);
        const dateString = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
        const badgeClass = `badge-${result.difficulty}`;
        const scoreClass = result.score === 100 ? 'score-perfect' : result.score >= 80 ? 'score-good' : 'score-needs-work';

        return `
            <div class="result-card">
                <span class="exercise-badge ${badgeClass}">${result.exerciseTitle}</span>
                <div style="margin: 1rem 0;">
                    <div class="result-score ${scoreClass}" style="font-size: 2.5rem;">${result.score}%</div>
                </div>
                <div class="exercise-meta">
                    <span>⏱ ${Math.floor(result.time / 60)}分${result.time % 60}秒</span>
                    <span>❌ ${result.errors}ミス</span>
                </div>
                <div style="margin-top: 0.5rem; color: var(--text-tertiary); font-size: 0.875rem;">
                    ${dateString}
                </div>
            </div>
        `;
    }).join('');

    resultsDashboard.innerHTML = `
        <div class="results-grid">
            ${resultsHtml}
        </div>
    `;
}

// ===================================
// Utility Functions
// ===================================
window.retryExercise = retryExercise;
window.closeExercise = closeExercise;
