use std::sync::Arc;

use bytes::Bytes;
use object_store::path::Path;
use object_store::ObjectStore;
use object_store_opendal::OpendalStore;
use opendal::services::S3Config;
use opendal::Operator;

#[tokio::main]
async fn main() {
    let mut cfg = S3Config::default();
    cfg.access_key_id = Some("my_access_key".to_string());
    cfg.secret_access_key = Some("my_secret_key".to_string());
    cfg.endpoint = Some("my_endpoint".to_string());
    cfg.region = Some("my_region".to_string());
    cfg.bucket = "my_bucket".to_string();

    // Create a new operator
    let operator = Operator::from_config(cfg).unwrap().finish();

    // Create a new object store
    let object_store = Arc::new(OpendalStore::new(operator));

    let path = Path::from("data/nested/test.txt");
    let bytes = Bytes::from_static(b"hello, world! I am nested.");

    object_store.put(&path, bytes.clone().into()).await.unwrap();

    let content = object_store
        .get(&path)
        .await
        .unwrap()
        .bytes()
        .await
        .unwrap();

    assert_eq!(content, bytes);
}
